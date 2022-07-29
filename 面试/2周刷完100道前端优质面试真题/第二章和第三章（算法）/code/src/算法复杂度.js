/*
 * @Author: yellowwenjie yellowwenjie@gmail.com
 * @Date: 2022-07-23 23:38:58
 * @LastEditors: yellowwenjie yellowwenjie@gmail.com
 * @LastEditTime: 2022-07-23 23:59:46
 * @FilePath: /第二章/算法复杂度.js
 * @Description: 
 * 
 * Copyright (c) 2022 by yellowwenjie yellowwenjie@gmail.com, All Rights Reserved. 
 */


function fn(obj = {}, key){
  // O(1)
  return obj[key]
}

// 时间复杂度
function fn(arr = []){
  // O(n)
  for (let i = 0; i < array.length; i++) {
    console.log(arr[i])
  }
}

function fn(arr = []){
  // O(n^2)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
    console.log(arr[j])
  }
  }
}

// 空间复杂度
function fn(arr = []){
  // O(1)
  const a = arr[1]
  constb = arr[2]
}

function fn(arr = []){
  // O(n)
  const a = []

  for (let i = 0; i < array.length; i++) {
    a[i] = a[i] + 1
  }
}
