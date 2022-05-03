---
title: datetime
---

# 日期时间选择器

## 日期选择器核心逻辑

制作日期选择器的基本是能获取一页的日期，一页最少需要显示6 x 7 = 42个日期。因此如何计算当月的前一个月与后一个月需要补充几天是关键。

![image-20220501165151062](./datetime/image-20220501165151062.png)

该部分逻辑在core文件夹下的date.ts中。

首先声明一些基本的关于日期的变量，比如：每个月对应的英文日期，平闰年每个月对应的天数，方便直接调用，不多赘述：

```ts
export const englishMonths = new Map<string,string>([
    ['1','January'],
    ['2','February'],
    ['3','March'],
    ['4','April'],
    ['5','May'],
    ['6','June'],
    ['7','July'],
    ['8','August'],
    ['9','September'],
    ['10','October'],
    ['11','November'],
    ['12','December']
])

const commonYearMap = new Map<string,number>([
    ['1',31],
    ['2',28],
    ['3',31],
    ['4',30],
    ['5',31],
    ['6',30],
    ['7',31],
    ['8',31],
    ['9',30],
    ['10',31],
    ['11',30],
    ['12',31]
])

const leapYearMap = new Map<string,number>([
    ['1',31],
    ['2',29],
    ['3',31],
    ['4',30],
    ['5',31],
    ['6',30],
    ['7',31],
    ['8',31],
    ['9',30],
    ['10',31],
    ['11',30],
    ['12',31]
])
```

下面为控制每个日期的状态（是不是本月？有没有被选中？）创建一个类：

```ts

/**
 * 日期时间选择器的时间对象
 */
export class DateObject{
    date: Date
    isCurrentMonth: boolean /** 控制CSS显示不是本月份的日期 */
    isSelected: boolean     /** 控制CSS显示被选中的日期 */
    constructor(date: Date,isCurrentMonth: boolean,isSelected: boolean){
        this.date = date,
        this.isCurrentMonth = isCurrentMonth,
        this.isSelected = isSelected
    }
}
```

下面写几个是工具函数：

* 判断平闰年：

    ```ts
    /**
     * 判断是否是闰年
     * @param year
     * @returns 
     */
    function isLeapYear(year:number): boolean{
        //能被4整除却不能被100整除或能被400整除的年份就是闰年
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    }
    ```

* 根据年月获取该月的天数：

    ```ts
    /**
     * 根据年月获取该月的天数
     * @param year 
     * @param month 从1开始月
     * @returns 
     */
    export function getDateCountByYearAndMonth(year: number, month: number): number{
        // 该年是否是闰年
        if(isLeapYear(year))
            return leapYearMap.get(month.toString())!
        else
            return commonYearMap.get(month.toString())!
    }
    ```

* 解构一个date对象，注意**月份需要加一**，因为从Date.getMonth()获取的月份从0开始：

    ```ts
    /**
     * 根据当前的date对象获取年月日时分秒
     * @param date 
     * @returns 年月（从1开始月）日时分秒
     */
    export function getYearMonthDateHourMinuteSecond(date: Date): number[]{
        return [date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()]
    }
    ```

* 使用字符串模板创建一个date对象

    ```ts
    /**
     * 使用字符串模板创建一个 date 对象
     * @param year 
     * @param month 从1开始月
     * @param date 
     * @param hour 
     * @param minute 
     * @param second 
     */
    export function createDate(year: number, month: number, date: number, hour?: number | undefined, minute?: number | undefined, second?: number | undefined): Date{
        if(hour!== undefined && minute!==undefined && second!==undefined)
            return new Date(`${year}-${month}-${date} ${hour}:${minute}:${second}`)
        else
            return new Date(`${year}-${month}-${date}`)
    }
    ```

接下来是重头戏，我们要根据一个date对象获取日期时间选择器一页的日期，把这个函数叫做`getFullScreen(date:Date):DateObject[]`

主要思路是，该月的第一天一定在日期选择器的第一行，因此算出第一天是周几就可以获取前一个月需要补几天，在用总数 - 该月的天数 - 前一个月需要补几天就是后一个月需要补的天数。

::: tip

当前月是1月或12月时需要跨年，特殊判断一下。

:::

```ts
/**
 * 根据一个date对象获取 日期显示器一页的日期
 * @param date 
 * @returns 日数组
 */
export function getFullScreen(date: Date){
    let [nowYear, nowMonth, nowDate, nowHour, nowMinute, nowSecond] = getYearMonthDateHourMinuteSecond(date);

    // 一个展示屏的所有天数
    let screenDates: DateObject[];
    // 该月有多少天
    let dateCount = getDateCountByYearAndMonth(nowYear,nowMonth);

    //[...Array.from(new Array(10).keys())] 快速生成天数数组
    // 在ts中 ...解构运算符只能用于array与string： [...Array.from(new Array(dateCount).keys())]
    screenDates = [...new Array(dateCount).keys()].map((value)=>{
        if(value + 1 !== nowDate)
            return new DateObject(createDate(nowYear,nowMonth,value+1,nowHour,nowMinute,nowSecond),true,false)
        else
            return new DateObject(createDate(nowYear,nowMonth,value+1,nowHour,nowMinute,nowSecond),true,true)
    })
    // 计算该月首是星期几，这里使用year,month,day的参数注意时区问题：
    // 当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。如果需要使用世界协调时 UTC，使用 new Date(Date.UTC(...)) 和相同参数。
    // 同时注意：星期天是0，需要变成7才符合逻辑
    let monthStartDay = new Date(Date.UTC(nowYear,nowMonth-1,1)).getDay() === 0? 7 :new Date(Date.UTC(nowYear,nowMonth-1,1)).getDay()


    // 计算出该月的前一月需要补几天
    let prevCount = monthStartDay - 1;
    let prevMonthDates: DateObject[] = []
    // 计算出上一个月的总天数
    let prevMonthDateCount = getDateCountByYearAndMonth(nowMonth===1?nowYear-1:nowYear,nowMonth===1?12:nowMonth-1)
    // 上一个月的date对象
    for(let i=prevCount - 1;i>=0;i--)
        prevMonthDates.push(
            new DateObject(createDate(nowMonth===1?nowYear-1:nowYear,nowMonth===1?12:nowMonth-1,prevMonthDateCount - i), false, false )// nowMonth 是真实月份
        );
    
    // 计算出该月的后一月需要补几天 = 7*6 - 当月的天数 - 前一月补的天数
    let postCount = 42 - dateCount - prevCount;
    // 获取下一个月的date对象
    let postMonthDates: DateObject[] = [...new Array(postCount).keys()].map(
        (value)=>new DateObject(createDate(nowMonth===12?nowYear+1:nowYear,nowMonth===12?1:nowMonth+1,value+1), false, false )// nowMonth 是真实月份
    )
    
    // 返回拼接的数组
    return prevMonthDates.concat(screenDates,postMonthDates)
}
```

## 组件结构

与select组件类似，我们需要一个输入框与一个下拉菜单：

* `updateDatetime(model: modelType, value: number | Date)`：用于修改props.model对应的值，因为props.modelValue是只读的，需要调用update:modelValue修改，model表示修改的日期的部分，方便对应修改日期的年、月、日、时、分、秒
* `updateTimeCSS()`用与给时间表设置css样式，包括将当前被选中的时间块置顶，这里主要用到的是设置DOM元素scrollTop（**一个元素的 `scrollTop` 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。**）的方法。

```vue
<template>
      <div class="scene-datetime">
        <!-- 日期选择器的输入框 -->
        <div class="scene-datetime-input">
          <s-icon color="#aa00ff" name="calendar2"></s-icon>
          <input v-model="datetimeTemplate" @focus="calendarControl(true)" id="scene-datetime-input-input" type="text" readonly/>
        </div>
        <!-- 日期选择器的下拉菜单 -->
        <Transition name="scene-datetime">
          <KeepAlive>
            <div v-if="showCalendar">
              <div class="scene-datetime-arrow"></div>
              <div class="scene-datetime-calendar">
                <!-- 菜单头部：显示年月日及切换年月的按钮 -->
                <div class="scene-datetime-calendar-header">
                    <div>
                      <s-icon style="margin-right:5px" name="chevron-double-left" @click="updateDatetime('year',modelValue.getFullYear()-1)"/>
                      <s-icon name="chevron-left"  @click="updateDatetime('month',modelValue.getMonth())"/>
                    </div>
                    <div>
                      <span style="margin-right:20px">{{modelValue.getFullYear()}}</span>
                      <span style="margin-right:20px">{{englishMonthName}}</span>
                    </div>
                    <div>
                      <s-icon name="chevron-right" @click="updateDatetime('month',modelValue.getMonth()+2)"/>
                      <!-- <img src="/right_16.svg" @click="updateDatetime('month',modelValue.getMonth()+2)"> -->
                      <s-icon style="margin-left:5px" name="chevron-double-right" @click="updateDatetime('year',modelValue.getFullYear()+1)"/>
                    </div>
                </div>
                <!-- 菜单主体 -->
                <div class="scene-datetime-calendar-body">
                  <div class="scene-datetime-calendar-body-date">
                    <!-- 日期表 -->
                    <div class="scene-datetime-calendar-body-date-table">
                      <div class="scene-datetime-calendar-body-date-thead">
                          <div class="scene-datetime-calendar-body-date-headcell"><strong>Mon</strong></div>
                          <div class="scene-datetime-calendar-body-date-headcell"><strong>Tue</strong></div>
                          <div class="scene-datetime-calendar-body-date-headcell"><strong>Wed</strong></div>
                          <div class="scene-datetime-calendar-body-date-headcell"><strong>Thu</strong></div>
                          <div class="scene-datetime-calendar-body-date-headcell"><strong>Fri</strong></div>
                          <div class="scene-datetime-calendar-body-date-headcell"><strong>Sat</strong></div>
                          <div class="scene-datetime-calendar-body-date-headcell"><strong>Sun</strong></div>
                      </div>
                      <div class="scene-datetime-calendar-body-date-tbody">
                        <div class="scene-datetime-calendar-body-date-tline" v-for="(dateObjectArr,index) in screenArray" :key="'r'+index">
                          <div v-for="(dateObj,index) in dateObjectArr" :key="'c'+index" class="scene-datetime-calendar-body-date-bodycell" 
                            :is-selected="dateObj.isSelected"
                            :is-current-month="dateObj.isCurrentMonth"
                            @click="updateDatetime('Date',dateObj.date)"
                            >
                            {{dateObj.date.getDate()}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 时间表 -->
                  <div class="scene-datetime-calendar-body-time">
                    <strong class="scene-datetime-calendar-body-time-label">Hour</strong>
                    <strong class="scene-datetime-calendar-body-time-label">Minute</strong>
                    <strong class="scene-datetime-calendar-body-time-label">Second</strong>
                    <s-scrollbar ref="hourScrollbar" :width="43" :height="210">
                      <div ref="hours">
                        <div v-for="(hour,index) in 24" :key="index" class="scene-datetime-calendar-body-time-cell" @click="updateDatetime('hour',hour-1)">{{hour-1}}</div>
                      </div>
                    </s-scrollbar>
                    <s-scrollbar ref="minuteScrollbar" :width="43" :height="210">
                      <div ref="minutes">
                        <div v-for="(minute,index) in 60" :key="index" class="scene-datetime-calendar-body-time-cell" @click="updateDatetime('minute',minute-1)">{{minute-1}}</div>
                      </div>
                    </s-scrollbar>
                    <s-scrollbar ref="secondScrollbar" :width="44" :height="210">
                      <div ref="seconds">
                        <div v-for="(second,index) in 60" :key="index" class="scene-datetime-calendar-body-time-cell" @click="updateDatetime('second',second-1)">{{second-1}}</div>
                      </div>
                    </s-scrollbar>
                  </div>
                </div>
                <!-- 菜单尾部，确认按钮等 -->
                <div class="scene-datetime-calendar-footer">
                  <div>
                    <s-button size="small" type="text" theme="info" @click="updateDatetime('Date',new Date())">now</s-button>
                    <s-button size="small" type="text" theme="info" @click="updateDatetime('Date',createDate(modelValue.getFullYear(),modelValue.getMonth()+1,modelValue.getDate()))">clear time</s-button>
                  </div>
                  <s-button size="small" theme="success" @click="calendarControl(false)">confirm</s-button>
                </div>
              </div>
            </div>
          </KeepAlive>
        </Transition>
      </div>
</template>

<script lang='ts'>
import {computed, defineComponent, ref, watch, nextTick, onMounted} from 'vue'
import sButton from '../button/button.vue'
import sScrollbar from '../scrollbar/scrollbar.vue'
import sIcon from '../icon/icon.vue'
import {datetimeProps, datetimeEmits} from './datetime'
import {englishMonths, DateObject, getDateCountByYearAndMonth, getYearMonthDateHourMinuteSecond, createDate, getFullScreen} from '../../core/lib/date'
import {turnTo2dArray} from '../../core/lib/array'
import '../../styles/global.css'

/**
 * 修改modelValue的七种模式
 */
type modelType = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second' | 'Date';

export default defineComponent({
  name:'scene-datetime',
  props:datetimeProps,
  emits:datetimeEmits,
  components:{ sButton, sScrollbar,sIcon},
  setup(props,{emit,attrs,slots,expose}){
    // 模板引用
    const hours = ref<HTMLElement>()
    const minutes = ref<HTMLElement>()
    const seconds = ref<HTMLElement>()
    const hourScrollbar = ref<any>()
    const minuteScrollbar = ref<any>()
    const secondScrollbar = ref<any>()

    // 是否显示下拉日历
    let showCalendar = ref(false);
    // 控制下拉日历的显示
    function calendarControl(open: boolean){
      if(open){
        showCalendar.value = true
        nextTick(()=>{updateTimeCSS()}) //更新时间部分CSS样式
      }
      else{
        showCalendar.value = false
      }
    }

    // 更新时间部分样式
    function updateTimeCSS(){
      let hourDivCollection = hours.value?.children
      let minuteDivCollection = minutes.value?.children
      let secondDivCollection = seconds.value?.children
      for(let i=0;i<24;i++){
        hourDivCollection?.item(i)!.removeAttribute('is-selected')
      }
      hourDivCollection?.item(props.modelValue!.getHours() as number)!.setAttribute('is-selected','true')
      hourScrollbar.value!.moveTo(props.modelValue!.getHours() as number * 33,'Y')     // 调用滚动条内部的方法，自动滚动使得当前时间块到顶部

      for(let i=0;i<60;i++){
        minuteDivCollection?.item(i)?.removeAttribute('is-selected')
        secondDivCollection?.item(i)!.removeAttribute('is-selected')
      }
      minuteDivCollection?.item(props.modelValue!.getMinutes() as number)?.setAttribute('is-selected','true')
      minuteScrollbar.value!.moveTo(props.modelValue!.getMinutes() as number * 33,'Y') // 调用滚动条内部的方法，自动滚动使得当前时间块到顶部
      secondDivCollection?.item(props.modelValue!.getSeconds() as number)!.setAttribute('is-selected','true')
      secondScrollbar.value!.moveTo(props.modelValue!.getSeconds() as number * 33,'Y') // 调用滚动条内部的方法，自动滚动使得当前时间块到顶部
    }

    // 显示在input中的日期
    let datetimeTemplate = computed(()=>`${props.modelValue!.getFullYear()}-${props.modelValue!.getMonth()+1}-${props.modelValue!.getDate()} ${props.modelValue!.getHours()}:${props.modelValue!.getMinutes()}:${props.modelValue!.getSeconds()}`)
    // 当前显示的英文月份
    const englishMonthName = computed(()=>{
      return englishMonths.get((props.modelValue!.getMonth()+1).toString())
    })
    // 当前显示的日历中的日期
    let screenArray = computed(()=>turnTo2dArray<DateObject>(getFullScreen(props.modelValue!),6,7))

    /**
     * 修改v-model 绑定的日期时间(有7种修改模式),
     * 这里不能用 Date()自带的set函数，否则监听不到响应式的变化
     */
    function updateDatetime(model: modelType, value: number | Date){
      let oldDate = new Date(props.modelValue!) // 未修改的日期时间
      let [year,month,date,hour,minute,second] = getYearMonthDateHourMinuteSecond(props.modelValue!)
      switch(model){
        case 'year':
          emit('update:modelValue',createDate(value as number,month,date,hour,minute,second))
          emit('change',props.modelValue!,oldDate)
          break
        case 'month':
          if(value === 0)
            emit('update:modelValue',createDate(year-1,12,date,hour,minute,second))
          else if(value === 13)
            emit('update:modelValue',createDate(year+1,1,date,hour,minute,second))
          else{
            // 需要更改的月份的总天数
            let MonthDateCount: number = getDateCountByYearAndMonth(year,value as number)
            if(date > MonthDateCount)// 修改的日期在更改的月份不存在，改为最后一天
              emit('update:modelValue',createDate(year,value as number,MonthDateCount,hour,minute,second))
            else
              emit('update:modelValue',createDate(year,value as number,date,hour,minute,second))
          }
          emit('change',props.modelValue!,oldDate)
          break
        case 'date':
          emit('update:modelValue',createDate(year,month,value as number,hour,minute,second))
          emit('change',props.modelValue!,oldDate)
          break
        case 'hour':
          emit('update:modelValue',createDate(year,month,date,value as number,minute,second))
          emit('change',props.modelValue!,oldDate)
          break
        case 'minute':
          emit('update:modelValue',createDate(year,month,date,hour,value as number,second))
          emit('change',props.modelValue!,oldDate)
          break
        case 'second':
          emit('update:modelValue',createDate(year,month,date,hour,minute,value as number))
          emit('change',props.modelValue!,oldDate)
          break
        case 'Date': 
          emit('update:modelValue', value as Date)
          emit('change',props.modelValue!,oldDate)
          break
      }
      nextTick(()=>{
        updateTimeCSS()
      }) //更新时间部分CSS样式
    }

    return{
      hours,
      minutes,
      seconds,
      hourScrollbar,
      minuteScrollbar,
      secondScrollbar,
      showCalendar,
      screenArray,
      englishMonthName,
      datetimeTemplate,
      calendarControl,
      updateDatetime,
      createDate,
    }
  }
})
</script>
<style scoped>
/**
* 动画的效果
*/
.scene-datetime-enter-active,
.scene-datetime-leave-active {
  transition: all 0.4s ease;
}

.scene-datetime-enter-from,
.scene-datetime-leave-to{
  visibility:hidden;
  opacity: 0;
}

.scene-datetime{
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: var(--scene-font-family);
}
/* 日期输入区域 */
.scene-datetime-input{
  display: flex;
  border: var(--scene-border-size) solid var(--scene-border-color-light);
  border-radius: var(--scene-border-radius);
  box-sizing: border-box; 
  width: 240px;
  height: 32px;
  padding-left: 5px;
  justify-content: space-between;
  align-items: center;
}
.scene-datetime-input:hover{
  border: var(--scene-border-size) solid var(--scene-border-color-dark);
}
/* 日期输入区域的子元素有获取焦点时 */
.scene-datetime-input:focus-within{
  border: var(--scene-border-size) solid var(--scene-theme-color-main);
}
/* 日期输入框边上的图标 */
#scene-datetime-input-img{
  width: 28px;
  height: 32px;
  box-sizing: border-box; 
  padding: 8px 5px 8px 7px;
}
/* 日期输入框 */
#scene-datetime-input-input{
  width: 212px;
  height: 26px;
  line-height: 26px;
  box-sizing: border-box; 
  padding: 0 5px;
  outline: none;
  border: none;
  font-size: var(--scene-font-size);
  font-family: var(--scene-font-family);
  letter-spacing: var(--scene-letter-spacing);
  color: var(--scene-font-color-dark)
}
/* 日期选择器的箭头 */
.scene-datetime-arrow{
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    top: 40px;
    left: calc(50%);
    border-top: var(--scene-border-size) solid var(--scene-border-color-light);
    border-right: var(--scene-border-size) solid var(--scene-border-color-light);
    transform: rotate(-45deg);
    z-index: var(--scene-index-advanced);
}
/* 日期选择器的下拉日历 */
.scene-datetime-calendar{
  position: absolute;
  top: 45px;
  left: calc(-50%);
  border-radius: var(--scene-border-radius);
  width: 450px;
  height: 350px;
  background: white;
  z-index: var(--scene-index-heighter);

  border: var(--scene-border-size) solid var(--scene-border-color-light);
  box-shadow: var(--scene-box-shadow);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 日期选项器的头部 */
.scene-datetime-calendar-header{
  /* 总高度35px  */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px 0;
  width: 450px;
  height: 35px;
  border-bottom: var(--scene-border-inner-size) solid var(--scene-border-color-light);
}
/* 日期选择器的主体 */
.scene-datetime-calendar-body{
  box-sizing: border-box;
  display: flex;
  width: 450px;
  height: 280px;
  padding: 10px;
}
/* 日期选择器的日期部分 */
.scene-datetime-calendar-body-date{
  box-sizing: border-box;
  width: calc(300px - 10px);
  height: calc(280px - 20px);
}
/* 日历表的样式 */
.scene-datetime-calendar-body-date-table{
  width: 100%;
  height: 100%;
}
/* 日历表头 */
.scene-datetime-calendar-body-date-thead{
  width: 100%;
  height: 13%;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: var(--scene-border-inner-size) solid var(--scene-border-color-light);
}
/* 日历表头每一格 */
.scene-datetime-calendar-body-date-headcell{
  width: 14.28%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
/* 日历表主体 */
.scene-datetime-calendar-body-date-tbody{
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
}
/* 每一行 */
.scene-datetime-calendar-body-date-tline{
  width: 100%;
  height: 16.6%;
  display: flex;
}
/* 每一格 */
.scene-datetime-calendar-body-date-bodycell{
  margin: 5px;
  width: calc(14.28% - 10px);
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
}
.scene-datetime-calendar-body-date-bodycell:hover{
  color:var(--scene-theme-color-main);
}
.scene-datetime-calendar-body-date-bodycell[is-selected="true"]{
  background:var(--scene-theme-color-main);
  color: white;
}
.scene-datetime-calendar-body-date-bodycell[is-current-month="false"]{
  color: var(--scene-color-dark-gray);
}
/* 日期选择器的时间部分 */
.scene-datetime-calendar-body-time{
  box-sizing: border-box;
  width: calc(150px - 10px);
  height: calc(280px - 20px);
  padding: 10px 0 10px 10px;
  /** content 宽：130px 高：240px*/
  display: flex;
  flex-flow: row wrap;
}
/* 时间部分表头 */
.scene-datetime-calendar-body-time-label{
  width: 43px;
  height: 30px;
  font-size: 12px;
}
/* 日历时间部分的每一个格 */
.scene-datetime-calendar-body-time-cell{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin: 7px 6px;
  height: 26px;
  font-size: 12px;
  cursor: pointer;
}
.scene-datetime-calendar-body-time-cell:hover{
  color: var(--scene-theme-color-main);
}
.scene-datetime-calendar-body-time-cell[is-selected="true"]{
  background:var(--scene-theme-color-main);
  color: white;
}
/* 日期选择器的底部 */
.scene-datetime-calendar-footer{
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: var(--scene-border-inner-size) solid var(--scene-border-color-light);
  width: 450px;
  height: 35px;
  padding: 0 10px;
}
</style>
```

