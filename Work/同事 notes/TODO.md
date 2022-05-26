# 设置项目git本地用户

## Github & Gmail

chengchina2021@gmail.com

CeLx9ha2

1. 李

   - [chengcui2022@gmail.com](mailto:chengcui2022@gmail.com)

   - Ruiku12345

   - GitHub

     - ```
       chengcui2022 Ruiku12345 Github. Monday Guy
       ```

2. 廖

   - [cuicheng2022@gmail.com](mailto:cuicheng2022@gmail.com)

   - Ruiku12345

   - GitHub

     - ```
       cuicheng2022 Ruiku12345 Github  Tuesday Guy
       ```
   
3. yang

   1. [cuicheng2021](https://github.com/cuicheng2021)

4. luo

   1. chengcuichina2021
      1. Ruiku123456

5. liang

6. pan

   1. chengcui2022

7. he

   1. cuicheng2022

CeLx9ha2

```
chengcui2025@gmail.com
Ruiku12345
```



nvm use 后 node_modules 才生效

npm i  安装的软件和 node_modules 绑定

 node_modules 和 node 版本绑定

```
rm -rf /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core; brew update  
```

 mac 显示隐藏文件

```
command shift .
```



### 删除贡献者

web 页面上, 选择新的分支为默认分支

1. 在 GitHub 网页上，更改分支名称（例如 main --> main1）。它更新了我的 GitHub 存储库仪表板上的贡献者列表。

2. 然后把它改回来 (main1 --> main)。

   

```
git push origin :master
```



## ReEcho

https://s3.console.aws.amazon.com/s3/buckets/reecho-staging?region=eu-west-1&tab=objects



```
dev@reecho.com
d3vita££mydud3&&
```

部署

### [基于 LocalStorage 的持久缓存#](https://swr.vercel.app/zh-CN/docs/advanced/cache#基于-localstorage-的持久缓存)

你可能希望将缓存同步到 `localStorage`。下面是一个示例实现：

```jsx
function localStorageProvider() {
  // 初始化时，我们将数据从 `localStorage` 恢复到一个 map 中。
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))


  // 在卸载 app 之前，我们将所有数据写回 `localStorage` 中。
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })


  // 我们仍然使用 map 进行读写以提高性能。
  return map
}
```



17:30-22:30

10:00-15:30

```
mac 强制刷新：command+shift+r 
mac 普通刷新：command+r 
```

```
添加code 命令到VSCode
>shell 
```



修改数据表键名后，需要重启服务

- [ ] Add beneficiary 下一页

下周二 contact



### 1104

- [x] Screen must display records stored on "Add Beneficiary" screen (PA-330)
  - [ ] 屏幕必须显示存储在 "添加受益人 "屏幕（PA-330）上的记录
- [x] Screen must store value as per the toggle button selection for each record
  - [ ] 屏幕必须按照每条记录的切换按钮的选择来存储数值
- [x] Screen must not allow total of input value exceeding to 100% or total of tokens
  - [ ] 屏幕必须不允许输入值的总和超过100%或代币的总和
- [x] Screen must display the number of tokens lock for this current settings
  - [ ] 屏幕必须显示当前设置的代币锁数量
- [ ] Screen must show the sum of each entry entered in each record
  - [ ] 屏幕必须显示每条记录中输入的总和

--no-verify



前端

- [ ] 前端一起合并



[add contackBook](http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com/api-docs/#/add%20new%20contact%20book%20for%20a%20particular%20user/registerContactBook)

- [x] get contactbook by id
  - [x] 只有admin 可以添加
  - [x] 添加界面和forward界面一样 get contact book by id
    - [ ] 用户名右侧有个添加 button
  - [x] 添加群成员，标题右侧，load contactbook，add new member
- [x] create group chat member 添加群成员
  - [ ] 发一条信息，被加群的人，自动发一条信息。socket 发送
  - [ ] add member list , 在被添加的成员显示 groupNonArchived
  - [ ] create group non archived
  - [ ] delete group chat member
- [x] Delete group chat member   删除群成员
  - [ ] 只有管理员显示
- [x] group members display admin
  - [ ] 名字右侧：添加、移除 admin 按钮
- [x] make group chat member admin



1. create group chat member 添加群成员

2. 被邀请人 join socket 

   1. ```
      const params = {
        user_id: this.state.currentUser.id,
        room_id: newGroup[i].room,
      };
      
      this.socket.emit('join', params);
      ```

      

3. Group chat 发信息

4. Get groupNonArchived by id



### 1115

- 弹窗显示个人信息**编辑**页面



### 1120

- BetaFE 现在开发版
- prod 客户使用版
- deploy 在线部署版

#### liang

- [x] Home to Login 
- [x] 注释掉 Get Start、Chats
- [x] `/` 登录自动跳转到聊天，写在login组件
- [x] 还原 私聊个人信息页面
- [ ] prod：build 复制到 deploy，deploy 保留 `.git .env server.js .htaccess`
- [ ] deploy 刷新问题

- [x] BetaFE: chat 右边加 profile ，移植 mockup 到



### 1122 liang

- [ ] Mockup Profile Edit

  - [x] 上边框导航栏
  - [x] 加侧边框导航栏
    - [x] Chat 也要
  - [x] 页面内容居中
  - [ ] 编辑

- [x] 展示 

  - [x] fetch user by id

    - [x] Slug: @peter1
    - [x] First name lastname
    - [x] city county

  - [x] API: Get recruiter profile

    - [x] 结果的 aboutyou == aboutme 部分

  - [x] I recruiter for 领域 sector

  - [x] API: recruiter experience

    - [x] Popular = sector 

    - [x] 用第一个结果的company

    - [x] title 职位

    - [x] image: `aws.s3/company/`

      ```
      {this.props.data.company_pic ? <img src={"https://reecho-frontend.s3-eu-west-1.amazonaws.com/company/" + this.props.data.company_pic} width="200" /> : <img src="https://reecho-frontend.s3-eu-west-1.amazonaws.com/job_memo/default.jpg" width="100" />}
      ```

  - [x] roles

    - [x] API: recruiterRoles
      - [x] roles
      - [x] Experience = skills `string 类型['skill, skill2, skill3']`

  - [x] contract 

    - [x] API: recruiterRoles  
      - [x] contract_type



### 1122 liang-2 周四检查

- [x] edit 右边确认后 右边要刷新
  - [x] Firstname : 
    - [x] API: user.service + updateUserName
  - [x] Company
    - [x] API: Update recruiter experience
      - [x] 整个是个数组
      - [x] API 用UserId获取，只更新第一条experience
      - [x] 需要看BE接口代码
  - [x] API: Role update
    - [x] roles
    - [x] contract type
  - [x] API: update recruiter profile
    - [x] about me
  - [x] API: updateUser
    - [x] popular = sectors
- [x] git pull 
- [x] mockup 更新换导航栏
- [x] API: updateUserImg 
- [x] tagmanager 1123
  - [x] mianform.js
- [x] 图片上传，下载Peter头像重复上传
  - [x] API: upload user
- [x] **已有的值要加到input框**



### 1123

- [x] React tag 插件实现
  - [x] Location 

    - [x] 左边city 右边contry
    - [x] 要联想功能
      - [x] countries.js 下拉菜单
    - [x] API: get all tags （只有city）
    - [x] API: getLocationTags
      - [x] country 的下拉菜单，自动补全
      - [x] 只有输入country 才能输入 city
    - [x] API: createLocationTag
      - [x] 新数据存储

  - [x] skills

    - [x] API: getSkillsTag

  - [x] sector

    - [x] API： ~~getSectorsTag~~ | sectorTags
      - [x] 不区分大小写，相同字母不要新增
    - [x] API: createSectorTag
      - [x] 回车确认时加到数据库

  - [x] roles

    - [x] API: getRolesTag

  - [x] 没有的值都要创建，保存到数据库

  - [x] contract 

    - [x] CheckBox 可以多选，三种

    - [x] 代码里面 contractTypes

    - [x] ```
       contractTypes: [
              {id: 1, value: "Permanent", isChecked: false},
              {id: 2, value: "Fixed Term", isChecked: false},
              {id: 2, value: "Temporary", isChecked: false}
            ],
      ```

      

- [ ] 用户名填充做成 value

- [ ] 请求做成异步的

- [ ] 图片上传bug修复

- [ ] 除了插件的都做完





### 1126

- [ ] 左边导航栏 完成 chat 和 jobs 和 profile 功能
  - [ ] `https://reecho-mockups.vercel.app/jobs`
- [ ] country 只取 title





### 1129 li liao

- [ ] 廖

  - [x] router 更新
  - [ ] Jobs mockup 移植
    - [ ] live-public
    - [ ] 接口问梁

  - [ ] get all job memos by limit

  - [ ] 8 jobs

  - [ ] Loadmore +8

  - [ ] ```
    curl -X 'GET' \
      'http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com/auth/allApprovedJobMemos?offset=0&limit=8' \
      -H 'accept: */*'
    ```

  ### 

- [ ] 李

  - [ ] create job
    - [ ] validation
    - [ ] [http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com/api-docs/#/Register%20Job%20Memo/registerjobmemo](http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com/api-docs/#/Register Job Memo/registerjobmemo)
    - [ ] title
      - [ ] company 可以输入
    - [ ] status 
      - [ ] radio button



### 1129 liang

- [ ] Id

  - [ ] 父子组件传

  - [ ] ```
    <JobDetail jobId={this.state.jobId} />
    ```

  - [ ] title

  - [ ] company

  - [ ] location

- [ ] get job memo from job id

  - [ ] ```
    curl -X 'GET' \
      'http://reecho-env.eba-bk9ugpha.eu-west-1.elasticbeanstalk.com/auth/jobMemoFromId?id=93' \
      -H 'accept: */*'
    ```

  - [ ] Short describetion h3

  - [ ] Long h5

- [ ] ~~Status  button input, internal comments  remove~~

  - [ ] Status 加:
  - [ ] coments blod

- [ ] get all collaborators by job memo id

- [ ] 上导航栏、侧导航栏封装成组件



- [ ] 需要再确认
  - [ ] 公司图片是 profile 中 company 的图片吗？
    - [ ] create jobs 图片需要上传？
    - [ ] edit jobs 图片需要上传？
  - [ ] 隐藏 button 和接口设计不符？
    - [ ] 需要掉 button 加 confirm

### 20220105

- [ ] Mockup 更新
- [ ] 部署后端, 用自己的后端
  - [ ] reechoFE

## Polkalokr

Plapp1-env BE

https://eu-west-2.console.aws.amazon.com/elasticbeanstalk/home?region=eu-west-2#/environment/dashboard?applicationName=plapp-1&environmentId=e-jgp5vpm72t

Tony Ruiku12345



https://560073339755.signin.aws.amazon.com/console

https://github.com/Polkalokr/plappbe



```
user name: polkalokr
passowrd: Nothing@1
https://app-dev.polkalokr.com/
```



https://www.figma.com/file/4GfxsfOhBgkQd4zBSieMMN/Polkalokr_app



### 提交流程

1. branch nam: pick any ticket number like lok-508
   1. Pull request: lok-507 508 513 498 496 494 493 #255



1. get Lockup details by lockup id
   1. by user id
2. get graph detail by lockup details id
   1. by user id



1. lockup
   1. Lockup details
      1. Graph detail 1
         1. Release date
         2. Amount 
      2. Graph detail 2
         1. Release date
         2. Amount 
      3. Graph detail 3



- tokens 和 lockup 的关系？
- lockup  是唯一的吗，还是一对多关系？
- platform_fee 从哪里来？和用户是什么关系？



- [x] unlock_type_type postgresql 修改 
  - [x] 增加 unlock_type
  - [ ] 移除 unlock_type_type



- customize-lock-user
  - 先消除红字才能继续计算
  - 至少两人



- [x] 本地保持登录，如何连接moralis？





### Release table

- Graph details
  - Main_chart_value 存储所有值
  - 或者 
  - 每行存储一个点的数据
  - 或者 
  - 只存储非线性的点



- 表单验证 300 bug
- 保持登录
  - 返回保持原来的数据

### Customise beneficiary user

- [x] `Token 300 = Total Lock Amount`
- [x] Lock LKR 不能点
  - [x] 先点 Approve Lock
  - [x] Approve Lock 变 disapprove lock
  - [ ] Approve 之后 Approve 按钮disable
- [ ] 数据未修改，不要 update 接口
- [x] Graph detail 进入时 update
  - [ ] 数据变化才 update
  - [x] continue update
- [ ] 返回恢复状态



- [ ] Categoty public 
- [ ] total value lcoked / release 次数 按照每个点的值渲染 
  - [x] market cup 也是



### 340

Name beneficiary name

Market cap ~~空着~~ https://www.coingecko.com/en/api

```
PA-340

Populate the lock settings record in manage token screen grid

Attach

Add a child issue

Link issue


Test Coverage
Description
Display stored list of lock settings in grid

for market cap column we will fetch data from this API Most Powerful Cryptocurrency Data API | CoinGecko 

after every 4 hours data in this column must be refreshed and stored in our DB
```

- [x] 重写manage token



### 341

```
PA-341

Edit Token Page > lock token data

Test Coverage
Description
• Unsaved changes
Display the LKR tokens available in the wallet

Display the stored data of lock settings:

lock amount

template

Distribution Type

Last unlock date & time

Unlock tokens release to
```

- [x] 拍视频



### 342

hover tooltip

```
/edit-token-locks

Polkalokr Backend In...

PA-342

Edit Token Page > Graph Data


Attach

Add a child issue

Link issue


Test Coverage
Description
• Unsaved changes
display the graph and upon hoovering over the node(s) screen must show the stored value (amount date and time)

 

Figma Link: Polkalokr_app 

Image: 
```

- [x] 拍视频



### 343

```
PA-343

Edit Token Page > Beneficiaries data


Test Coverage
Description
Display the stored data of wallet name

Display the stored data of wallet address

Display the stored data of value stored against each wallet record (amount/percentage)

Screen must allow user to edit and delete the existing record and save the changes made
```

- [x] 拍视频



### 344

```
PA-344

Edit Token Page > Summary Data

Display the Service fee

Display the total lockup amount for this setting

Display the last unlock date & time
```

- [x] 拍视频



### 345

```
Edit Token Page > Void Contract
PA-345
screen needs show the "void contact" button based on the value stored in PA-334: Store the selection on final stepTO DO

if checked then this button will appear

if uncheck then this button will not appear
```

Void Contract 按钮

- 数据库的 smart contract 
- 超过 last unlock 变暗，不能点
  - 弹窗
  - https://www.figma.com/file/4GfxsfOhBgkQd4zBSieMMN/Polkalokr_app?node-id=4289%3A29343



### 347

```
Polkalokr Backend In...

LOK-347

Edit Token Page > updated information

Test Coverage
Description
This will only show the stored changes made in manage beneficiaries

<old wallet address> <new wallet address>

<old wallet name> <new wallet name>
```



### 348 Claim tokens

available=user amonut

total=user amonut

claimed = 点的值

点击按钮后，消失进入 Claim history

```
Claim Token Page >Population of data in grid
pa-348
Display the records data that are eligible to claim along with action button > claim NFT and claim token
```



### 349 claimed store

```
Polkalokr Backend In...

PA-349

Claim Token Page > saving for claimed records


Attach

Add a child issue

Link issue


Test Coverage
Description
screen must store records that are claimed and not claimed yet 
```



### 350 Claim history

- [x] 加入Button 
- [x] 数据存储已经Claim的

```
Polkalokr Backend In...

PA-350

Claim History Page > populate the claimed token records


Attach

Add a child issue

Link issue


Test Coverage
Description
Screen must display the records that have been claimed 
```



### [] 392 Coin list

https://www.coingecko.com/en/api/documentation

- [x] 外层都是币种

- [x] 内层是beneficiary



- [x] add bene 之前加 [nft-distribution](http://localhost:8080/#/nft-distribution)



- [x] 没有结果时显示 No Data Found
- [x] 加上图标
  - [x] 等客户发
  - [x] 都先用 bitcoin.png
  - [x] Unknow.jpg

```
392.   configure coingeco API with the dropdown and user can search a token via token name or contract address

if user enters any token name which is not listed on coingeco then dropdown must show "no data found" 

if user enters any token name which doesn't have the token icon the "broken image" icon must appear along with token name
```



### Assets

- using coin gecko API is only half the picture, it will get 60% of all coins in existence
- we can also look at https://github.com/Polkalokr/assets we might need to pull updated data from original api, but have a look see if we can use this repo as it contains thousands of coins and their logos
- If no token information is available on coingeck, or in the trust asset list then we have to use the tokens Contract ID and we can grab what information etherscan has using their APIs

**Polkalokr/assets**
A comprehensive, up-to-date collection of information about several thousands (!) of crypto tokens.
**Website**
https://developer.trustwallet.com/add_new_asset



### Lockup Details 合并

- [x] lockup 表复制到 Lockup Details
  - [x] 修改接口
  - [x] 修改组件代码



### Bug

- [x] Manage Token: Unlock Progress `toFixed(2)`
  - [x] 0.00 / 0 LKR (NaN%)
- [x] Next Unlock: chart 最近的时间
- [ ] edit-token-locks 
  - [ ] **Lock Details**
    - [ ] Balance: 150,098.56



### [374] add beneficairy

- [x] 只展示当次添加的人 vuex
- [x] 回到界面需要展示当次添加的人 vuex
- [x] 刷新清空列表



### [] Constomize lock user

- [x]  一个用户也可以分配 lock，修改算法，去掉reduce
- [x] 去掉从服务器获取值自动填充，使用 vuex 存储返回状态



### [378] customize lock

- [x] 四个 unlock date 文字改成 distribution

  - [x] ```
    Freeze "Schedule" field if "Distribution Type" is "Block"
    ```

- [x] distribution type = block 时 sheldue 不能选

- [x] customize-lock graph UserId

  - [x] vuex 异步问题

freeze

- [x] 视频



### [o] 388 resume modal

```
388 Due to any reason user gets disconnected while creating lock screen must ask "Do you want to resume creating the lock?" Yes/No
Yes- Screen must land on the page where user discontinued from
No - Screen will show create a lockup page
```



- [ ] Nft 自动填充
- [x] add beneficiary
  - [x] 更新后端 get beneficiary 接口，
  - [x] 前端添加 lockup_details_id 
  - [x] 去掉所有 lockup 相关接口和选项
  - [x] 自动填充 lockup_details_id 绑定的 beneficiary
  - [ ] 根据 lockup_details_id 显示 resume user
- [ ] get payment
  - [ ] 前端添加 lockup_details_id
  - [ ] Manage  token 根据 all lockup details 分类显示
    - [ ] claim token 也是
- [ ] resume 选是, select token lock 返回上一页 resume 否，点continue 依然会 resume
- [x] 流程完成标记
  - [x] Step string
- [x] 新用户 lockup details 创建两次数据问题
- [ ] ~~tokens 移除 market_cap~~



- [x] 接口更新
  - [x] get beneficiary
  - [x] get payment



- [x] 点击否
  - [x] 无数据
    - [x] create
  - [x] 有数据
    - [x] delete
      - [x] create
- [x] 点击是
  - [x] update



### [o] 423 

```
copy lock functionality
423

manage token screen > copy icon button

Paste in field on Copy lock screen

clicks on "Continue" button 

System will auto populate the settings all the settings from that lock to this lock that user is creating 

the following information will auto populate 

all fields in customize lock page
-all setting on graphs eg addition nodes

NFT distribution value

Beneficiary list  (Wallet name, wallet address)

Customize lock per benefieries 

Final Step > checkbox checked or check

Approval > Payment Method
```



- [x] Copy lock 
  - [x] 复制用户的数据
  - [x] 点 继续 自动赋值到后面的页面
- [x] Video 



### [o] Bug

- [x] Add beneficiary
  - [x] 添加后返回，删除用户应从服务器也删除
  - [x] amount 金额添加失败
  - [x] 百分比开关失效
- [ ] edit-token-locks
  - [ ] Beneficiary delete 渲染 bug



### [o] 要求

- [x] try to remove all the consoles before pushing the code and you can also use logger



### [o] PA-371

```
pa-371.  
cancel button not working on following screens
This is not resolved the "Cancel" button isn't working on the Customise lock screen
```

四个页面 cancel 无效

![截屏2021-11-30 13.32.35](./TODO.assets/截屏2021-11-30 13.32.35.png)



### [o] LOK-439

```
Projects
Lokr

Add epic

LOK-439

when I Make beneficiary of a specific Token after that again I make beneficiary on another Token then all saved beneficiaries token name has been changed


Attach

Add a child issue

Link issue

Description
When I make the beneficiary of a specific Token after that again I make beneficiary on another Token then 
all saved beneficiaries token name has been changed


```

- [x] https://www.loom.com/share/a33b2ea8e35541e2934ab49cf80ddc1a

- [x] manage token set click
  - [x] edit token 页面数据不对应



### [o] LOK-424

```
Type: BugStatus: To DoPriority: MediumReporter: Muhammad FaisalAssignee: Daniel MunnProject: LokrEstimate:
LOK-424: When I clear the Entered Amount in lock amount field then Total Actual Balance is Disappear
0+1000
When I clear the Entered Amount in the total lock amount field then Total Actual Balance is Disappear

```

- [ ] https://www.loom.com/share/a7c7566cfc524f13b27455a80d6a36f6



### [bug] LOK-417

```
Type: BugStatus: To DoPriority: MediumReporter: Muhammad FaisalAssignee: tony cuiProject: LokrEstimate:
LOK-417: When I added the Percentage then Lock amount is not updated (user able to save with zero amount)
3+1000
When I added the Percentage then the Lock amount is not updated (user able to save with zero amount)

Screen Name: Manage Beneficiary Setting

Hide this
```

- [x] https://www.loom.com/share/66f03fa6c69d4cdca5be4650a49735bd
- [x] Tokens assigned 总金额显示
- [ ] 百分比每次保存 加0%



### [o] LOK-410

```
Type: BugStatus: To DoPriority: MediumReporter: Muhammad FaisalAssignee: Daniel MunnProject: LokrEstimate:
LOK-410: After revert "Percentage toggle" isn't appear the actual amount
3+1000
After revert "Percentage toggle" isn't appear the actual amount

Screen Name: Customise lock per beneficiary

It's 99.99… after reverting
```

- [x] https://www.loom.com/share/1919775858a94859a912be6953c3cf15



### [o] LOK-420

```
Type: BugStatus: To DoPriority: MediumReporter: Muhammad FaisalAssignee: Daniel MunnProject: LokrEstimate:
LOK-420: Percentage calculate isn't working correctly on the "Customise per lock beneficiary"
0+1000
Percentage calculate isn't working correctly on the "Customise per lock beneficiary"

Screen Name: Customise per lock beneficiary
```

- [x] https://www.loom.com/share/02f51314836e4d19932eccff2f8010cb



### [bug] 1201-1

- [x] Start lock in token date 必须小于 start distribution
  - [x] 修复日期校验
  - [x] 最后一个日期选项不生效？
- [x] 去掉表格下的趋势线

- [x] 红线最大值问题，
  - [x] Lock tokens available 设置成本次的 amount
- [x] download CSV
  - [x] 导出的变量名和 导入的变量名一致
- [x] claim token 467
  - [ ] 只有对应的 beneficiary address 的用户登录才能 看到和 claim token
  - [ ] 通过 user 表中的 ethaddress 和 beneficiary 的 wallet_address 绑定
- [x] 清空 Vuex 函数



### [o bug] 442

```
Projects
Lokr

Add epic

LOK-442

When I enter the amount in lock amount field after that I come back to previous form and again go to next form then Total amount not according to entered amount

Description
When I enter the amount in lock amount field after that I come back to the previous form and again go to 
next form then Total amount not according to the entered amount

Screen Name:Customise a lock 
```

https://www.loom.com/share/c8b93477517f411780674011d5d1eb28

- [ ] 返回上一页重复创建 lockupdetails 问题！
- [x] 第二个日期不能后退



### [o] 444

```
Projects
Lokr

Add epic

LOK-444

"Last Distribution" date is not according to change "Releases"and "Schedule"


Attach

Add a child issue

Link issue

Description
"Last Distribution" date is not according to change "Releases" and "Schedule"


Screen Name: Customise a lock 
```

https://www.loom.com/share/31f3f4b8fcd64b19be038fe878ba4084

- [x] "Last Distribution" date is not according to change "Releases" and "Schedule"
- [x] 第三个日期，不能晚于第二个日期



### [o] 445

```
Projects
Lokr

Add epic

LOK-445

When I click on the Nodes of Graph then lock amount automatically increase


Attach

Add a child issue

Link issue

Description
When I click on the Nodes of Graph then  lock amount increases automatically(I just click on the node and press the cancel button but the lock amount has been increased)


Screen Name: Graph Screen 
```

https://www.loom.com/share/da711e75f8aa4a1dabd99539992eaa36 

- [x] When I click on the Nodes of Graph then lock amount automatically increase

1203 下午六点



### [o] 446 

```
Projects
Lokr

Add epic

LOK-446

When I selected the "Exponenial"Graph then the Total lock amount is not accurate on the "Graph"Screen


Attach

Add a child issue

Link issue

Description
When I selected the "Exponential"Graph then the Total lock amount is not accurate on the "Graph"Screen(Total lock amount is 10 but showing on the graph is 1210 ) 

```

https://www.loom.com/share/3ba92cdb53534ec28f3787d44799de72

- [x] Total lock amount is 10 but showing on the graph is 1210 
- [x] 精度丢失问题
- [x] 不能超过总金额



### [o] 447

```
Projects
Lokr

Add epic

LOK-447

Total balance showing on the customise screen is "10000" when I entered the "100" amount in lock amount field then the Total balance has changed to Negative "-2100"


Attach

Add a child issue

Link issue

Description
Total balance showing on the customise screen is "10000" when I entered the "100" amount in lock
amount field then the Total balance has changed to Negative "-2100"


Screen Name: Customise Lock Screen
```

https://www.loom.com/share/8324674834014c96be66e23d2d639e55

- [x] balance 负数问题



### [o] 449

```
Projects
Lokr

Add epic

LOK-449

when I added the new beneficiary then in which claim token all beneficiary names has been changed


Attach

Add a child issue

Link issue

Description
when I added the new beneficiary than in which claim token all beneficiary names has been changed 

Screen Name: Claim Token
```

https://www.loom.com/share/205288d2b0174caf941e937d8c1e7670

- [x] 重复创建数据 or 没有取对应的数据
- [x] https://www.loom.com/share/6c725832f50b48c4b113120cfbf8c583
  - [x] This issue is not resolved…saved data in the claim token has changed when I added a new beneficiary



### [o] LOK-355

```
Create a lock page doesn't clear up the information                                                                 When I go back to the previous page and then return to the Create a Lock page, the previous data is still being used to make calculations

This happens when I toggle the Lock Amount / Total Lock Amount box

Screen Name: Customise Lock Screen
```

- [ ] 回到create页面才会重新提示清空数据



### [o] LOK-431

```
Add epic

LOK-431

When I select the "Semi Annual"Schedule then Graph isn't working

Description
When I select the "Semi Annual"Schedule then Graph isn't working 

Screen Name: Graph Screen

Perhaps tony cui  could take a look at this

I think the graph line should be shown in a semi-annual setting 

Muhammad Faisal what's the expected behaviour of this setting that you input?
```

- [x] https://www.loom.com/share/8769f848de1d42d99f101bb5c7850692
- [x] 一个点 需要一条线



### [o] LOK-434

```
Add epic

LOK-434

When I create the new beneficiary then "New Token" Beneficiary shown again and again I have delete many times this beneficiary but not delete permanently

Description
When I create the new beneficiary then "New Token" Beneficiary shown again and again I have delete 
many times this beneficiary but not deleted permanently
```

- [x] https://www.loom.com/share/87434aa878e64a40b5825b772644eb54
- [x] create new token 时，清空后面流程数据



### [o] LOK-409

```
Add epic

LOK-409

"Schedule"weekly,monthly,Quarterly and semi Annual isn't working correctly


Attach

Add a child issue

Link issue

Description
"Schedule"weekly,monthly,Quarterly and semi Annual isn't working correctly 

Screen Name: Customise a lock screen
```

- [x] [https://www.loom.com/share/3eab252fbae7457fb0691528b7fd](https://www.loom.com/share/3eab252fbae7457fb0691528b7fd)



### [o] LOK-408

```
LOK-408

when user enter the releases number then "Custimise Form" size has changed

Description

when user enter the releases number then "Custimise Form" size has changed 

Screen Name:Customise a lock screen
```

- [x] https://www.loom.com/share/714a2b8eebde412ba2748d431c1a0d0a



### [o] LOK-407

```
LOK-407

Download CSV template isn't working on the add beneficiary


Attach

Add a child issue

Link issue

Description
Download CSV template isn't working on the add beneficiary

Screen Name: Add Beneficiary Screen
```

- [x] https://prnt.sc/1zw6asq



### [o] LOK-406

```
Add epic

LOK-406

Cancel Button isn't working on the "Customise Form"


Attach

Add a child issue

Link issue

Description
Cancel Button isn't working on the "Customise Form"
```

- [x] https://prnt.sc/1zvq4k8



### [o] LOK-404

```
LOK-404.    If I change the Graph template selection then "Customise Form" size has changed


Description
If I change the Graph template selection then "Customise Form" size has changed 

Screen Name: Customise a lock 
```

- [x] https://www.loom.com/share/f1dffc66bd3a44588aa9532095b201d1



### [o] LOK-395

```
395.   Fields alignment isn't correct on the "Customise Form"


Description
Fields alignment isn't correct on the "Customise Form" 
```

- [x] https://prnt.sc/1zvk6h9



### [o] LOK-353

```
Add epic

LOK-353

Losing user data on route change


Description
From the /create-token-lock route, clicking on the wallet button or the 'Token lock' tab will change the route, losing the user's data and asking again for the Moralis signature.
```

![截屏2021-12-08 11.07.11](./TODO.assets/截屏2021-12-08 11.07.11.png)



### [o] LOK-435

```
LOK-435

"Lokr Amount" and "Releases" validation isn't working (User able to Continue with Zero amount)

Description
"Lokr Amount" and "Releases" validation isn't working(User able to Continue with Zero amount)

Screen: Customise lock per beneficiary
```

- [x] https://www.loom.com/share/e37d96c21f8e4a499c0f4bf574ed5c09



### [o] LOK-457

```
LOK-457

When I added a new beneficiary then saved data go to Claim token whereas should show in "Manage Token"

Description
When I add a new beneficiary then saved data go to Claim token whereas should show in "Manage Token"

https://www.loom.com/share/9d28f0782e564a5498785d0fab7e6e2a

please review the LOK-457 tickets (edited)
When I add new beneficiary then saved data go to the Claim token whereas should show in "Manage Token"
```

- [x] https://www.loom.com/share/9d28f0782e564a5498785d0fab7e6e2a
- [x] 数据库储存 market cap 和时间 到 lockup_details， 优先使用4小时内的 lockup_details 里的 market cap
  - [x]  lockup_details 有则不请求接口



### [o] LOK-458

```
Projects
Lokr

Add epic

LOK-458

User able to create only one beneficiary when I added one more beneficiary with different name then system show error

Description
User able to create only one beneficiary when I added one more beneficiary with a different name then system show error

Screen Name: Add Beneficiary 
```

- [x] https://nimb.ws/lBKqXo

### [o] LOK-459

```
Projects
Lokr

Add epic

LOK-459

Once beneficiary I create successfully and after that when I create the new beneficiary then previous form data aren't "Refresh"

Description
Once beneficiary I create successfully and after that when I create the new beneficiary then the previous "Beneficiary" data aren't "Refresh"  

Screen Name: Customise lock screen
```

- [ ] https://faisal-polkalokr-com.nimbusweb.me/s/share/6378042/qds7xsqc5b4xrtd3073y
- [x] Beneficiary 重复地址警告不消失

### [o] LOK-460

```
Projects
Lokr

Add epic

LOK-460

"Lock Amount"and "Releases"both field type should be number

Description
"Lock Amount" and "Releases" both field type should be "number" 


Screen Name: Customise Lock 
```

- [ ] https://nimb.ws/4Y0rwb



### [o] LOK-461

```
Projects
Lokr

Add epic

LOK-461

User able to "Continue"without selecting "Scheduling"


Description
User able to "Continue" without selecting "Scheduling"


Screen Name:Customise lock screen
```

- [ ] https://nimb.ws/FLcPrl

### [o] LOK-462

```
Projects
Lokr

Add epic

LOK-462

When I create new "Beneficiary" then populate previous beneficiary data on every Screen


Description
When I created a new "Beneficiary" then  populate the previous beneficiary data on every Screen

```

- [ ] https://nimb.ws/R7xFUy

### [o] LOK-455

```
Projects
Lokr

Add epic

LOK-455

Lokr App getting "Crash "when I added the large amount of "Releases"


Description
Lokr App getting "Crash "when I added the large amount of "Releases" and click on the Continue


Screen Name: Customise lock
```

- [ ] https://www.loom.com/share/cedc3b527fb24acbba7055aa38018f8b

### [o] LOK-454

```
Projects
Lokr

Add epic

LOK-454

When I added the large amount in the "Lock Amount" field then Total Balance is Continue goes to Negative

Description
When I added the large amount in the "Lock Amount" field then Total Balance is Continue goes to Negative  


Screen Name: Customise Lock Screen
```

- [x] https://www.loom.com/share/d753e08b1b0d4dcfbd9b20ea1d939e2a
- [x] 余额最小为0，小于显示红色警告

### [o] LOK-452

```
Projects
Lokr

Add epic

LOK-452

Once the wallet is connected. then "Connect" wallet Button should be disappeared and the "Continue" Button should appear


Description
Once the wallet is connected. then "Connect" wallet Button should be disappeared and the "Continue" Button 
should appear


Screen Name: Lending screen 
```

- [x] https://www.loom.com/share/0f10de9d21fe48598efb5169f7324ee9

### [o] LOK-453

```
Projects
Lokr

Add epic

LOK-453

When I changed the "Graph"Template then "Balance"has changed and "Continue"Button has Disable (functionality is not work smoothly)


Description
When I changed the "Graph"Template then "Balance" has changed and "Continue"Button has Disable
(functionality is not work smoothly)


Screen Name: Customise Screen
```

- [ ] https://www.loom.com/share/947c93d4d331423ba0d6026935a72c5e

### [o] LOK-467

```
Projects
Lokr

Claim Tokens

LOK-467

Claim Page > Benefieries access

Test Coverage
Description
Wallet 1 creates a lock and adds wallet 2 and wallet 3 in beneficiaries for lock settings 
now when release occurs against this lock settings  and when wallet 2 and wallet 3 logs in they must be able to see the claim records on Claim page
```



### [] bug

- [x] beneficiary 名字太长影响显示，所有有beneficiary 的页面 =

- [x] edit token lock页面 图表和 summary 数据不对应

- [ ] Manage token unlock progress 显示进度问题=

  - [ ] next unlock 显示0小时=

- [ ] Claim history functionality isn't working

- [ ] Create、update Payment 重复请求=

- [ ] Claim Token 页面 beneficiary 重复显示=

- [ ] Claim History 页面 未按货币种类显示对应数据=

- [x] 切换用户时vuex未清空=

- [x] ```
  vue.runtime.esm.js?2b0e:619 [Vue warn]: Error in v-on handler: "TypeError: Cannot read properties of undefined (reading 'id')"
  
  found in
  
  ---> <Navigation> at src/components/Navigation/Navigation.vue
  ```

- [x] vuex 过慢问题 =

- [x] Edit token locks

  - [x] 数据不对应
  - [x] Manage beneficiary，amount 不能正常修改

- [x] manage token页面不展示数据问题=

- [x] lock token、manage token 页面之间跳转问题=

  - [ ] 用历史记录返回，无法准确跳转=

- [x] customize-lock=

  - [ ] 图表点不能最大值问题
    - [ ] 保持点总和为最大值，否则分配不完全，用户数据和总和不对应
  - [ ] 拖动点的时候重复请求
    - [ ] 未解决！

- [x] Market cup 阻塞渲染=

- [x] Old Address 太长=

- [ ] 用户登录api session 有效性问题，session 失效后 user 没有退出，检测失效事件
  - [ ] Metamask 用户地址切换，user 不对应的问题
  - [ ] 用户数据删除但还能正常使用
  
- [x] final setup=

  - [ ] 状态不能保存

- [x] **Beneficiary Summary**

  - [ ] 点approve 后 beneficiary 消失
  - [ ] 刷新后date 不显示

- [x] customize-lock page And event-base-release page=

  - [ ] Copy lock Cancel button not working
  - [ ] Close button css error

- [ ] select token page

  - [ ] coin_id not found error

- [ ] payment 完成后没有清空

  - [ ] 和重复创建问题

- [ ] claim token graph 空时报错

- [ ] Beneficiary summary 数据不对应

- [ ] 根据lockup是否跳转回首页前应判断有无页面需要的数据

  - [ ] 封装成函数



### Claim History Page

```
Claim History Page > populate the claimed token records

Test Coverage
Description
Screen must display the records that have been claimed 

Figma Link: Polkalokr_app 

Image: 

Estimate (async mode)

Claim history functionality isn't working 
```

- [ ] `0x8c4c8e3a2694f96222422dfc852c071b32026867`
- [ ] `0xB360A8141274cDF6b194E24bf799d2112B6D0AC5`
- [ ] Get 不区分大小写，统一转换成小写



### [bug] LOK-477

```
Add epic

LOK-477

While creating a lock i can see 130+ API calls to the server which is very inconvenient for the performance.


Attach

Add a child issue

Link issue

Description
While creating a lock I can see 130+ API calls to the server which is very inconvenient for the performance.
https://drive.google.com/file/d/1u34JcUvZKXTHG9zqLA2zRe8IqooJmvag/view?usp=sharing
```

- [ ] preflight 请求
- [ ] graph details 和 lockup details 合并
- [ ] local storage 储存 step
- [ ] Payment 合并到 lockup details

 

### [o] LOK-478

```
Projects
Lokr

Add epic

LOK-478

Lock Amount

Test Coverage
Description
on custom graph page if user deletes a node screen must not subtract/change the deleted node amount from the lock amount.

Figma link: https://www.figma.com/file/4GfxsfOhBgkQd4zBSieMMN/Polkalokr_app?node-id=4289%3A27953
```



### [o] LOK-195



```
Token Lock

F-End Copy Token Link

Test Coverage
Description
Feature# 2: As an end user I want to make a copy of system generated token link/address so that I can save it somewhere for my record and use it later

This will open a new window where user can enter a link of its existing settings and system will fill the fields of the existing settings of token locking to the current one

Populate  a button with name of "Copy Lock"

Note

Wallet must be connected

Menu Selection > Token

/event-base-release
```

- [ ] Copy lock beneficiary 名字和地址问题
- [ ] Copy lock 流程逻辑完善



### [o] LOK-482



```
when I created the new lock then data do not appear in Manage Token

Attach

Add a child issue

Link issue

Description
when I created the new lock then data do not appear in Manage Token
https://nimb.ws/zW0Bgt

Screen Name: Manage Token
```

- [ ] 数据不完整！
- [ ] next lock 事件向上取整



### [o] LOK-488

```
Add epic

LOK-488

Enable the validation on add beneficiary screen two beneficiary wallet address shouldn't same

Description
Enable the validation on add beneficiary screen two beneficiary wallet addresses shouldn't same
https://nimb.ws/Oxg5Tt

Screen Name: Add Beneficiary
```





### [] LOK-490



```
Projects
Lokr

Add epic

LOK-490

Token selection list token logo isn't shown but when I select token then the logo is shown


Attach

Add a child issue

Link issue

Description
Token selection list token logo isn't shown but when I select token then the logo is shown 
https://nimb.ws/leSUsA

Screen Name: Create a lock
```



### [] LOK-491

```
Projects
Lokr

Add epic

LOK-491

Percentage field shouldn't enterable should be auto calculate


Attach

Add a child issue

Link issue

Description
Percentage field shouldn't enterable should be auto calculate
https://nimb.ws/oVRFsp

Screen Name: Edit Manage token 
```



### [] LOK-492

```
Projects
Lokr

Add epic

LOK-492

When I reload page on Edit Manage Token Screen then I just lose my data

Description
When I reload the page on Edit Manage Token Screen then I just lose my data 
https://nimb.ws/FX0mU6

Screen Name: Edit Manage Token 
```



### [o] LOK-489

```
Projects
Lokr

Add epic

LOK-489

Edit Beneficiary functionality isn't working on the "Manage Token" Screen


Attach

Add a child issue

Link issue

Description
Edit Beneficiary functionality isn't working on the "Manage Token" Screen
https://www.loom.com/share/3c986cc5f90c4a3bbc7c466f3058e1b6

Screen Name: Manage Token 
```



### [o] LOK-493

```
Projects
Lokr

Add epic

LOK-493

Token selection list token logo isn't shown but when I select token then the logo is shown


Attach

Add a child issue

Link issue

Description
Token selection list token logo isn't shown but when I select token then the logo is shown 
https://nimb.ws/leSUsA

Screen Name: Create a lock
```



### [] LOK-494

```
Projects
Lokrs

LOK-494

"Add Beneficiary" validation isn't working we can add same name Beneficiary

Description
"Add Beneficiary" validation isn't working we can add the same name Beneficiary 
https://nimb.ws/m2qoN8

Screen Name: Add beneficiary
```



### [o] LOK-496

```
Projects
Lokr

Add epic

LOK-496

Graph node pop-up scrolling of over the screen but doesn't remove

Description
Graph node pop-up scrolling of over the screen but doesn't remove  
https://nimb.ws/f4jP73

Screen Name: Graph Screen
```



### [o] LOK-497

```
Projects
Lokr

Add epic

LOK-497

"Are you sure want to Delete"Font should be small

Description
"Are you sure want to Delete"Font should be small
https://drive.google.com/file/d/14tvOhzx7l-JPGcxq0uGcDlv_6-NVmcfX/view?usp=sharing

Screen Name : Delete Beneficiary
```



### [o] LOK-498

```
Projects
Lokr

Add epic

LOK-498

"Badcarams" isn't working on Lokr app

Description
"Badcarams" isn't working on Lokr app 
https://screenbud.com/shot/635a47ad-089d-4f4a-a6e4-4af23980a100

Screen Name: Home Screen 


Activity
```



### [o] LOK-341

```
Projects
Lokr

Polkalokr Backend In...

LOK-341

Edit Token Page > lock token data

Test Coverage
Description
Display the LKR tokens available in the wallet

Display the stored data of lock settings:

lock amount

template

Distribution Type

Last unlock date & time

Unlock tokens release to

Figma Link: Polkalokr_app 

Image: 
```

Date and Time not showing according to Figma



### [o] LOK-499

```
Projects
Lokr

Add epic

LOK-499

When I Change the "Schedule" then "Releases and Lock amount" aren't stable on the Graph Screen

Description
When I Change the "Schedule" then "Releases and Lock amount" aren't stable on the Graph Screen 
https://nimb.ws/tG24dY

Screen Name: Graph Screen
```



### delete sql

```sql
delete from beneficiary where user_id = 34;
delete from claim_histroy where user_id = 34;
delete from graph_details where user_id = 34;
delete from payment where user_id = 34;
delete from tokens where user_id = 34;
#delete from users where id = 34;
delete from lockup_details where user_id = 34;
```



### [o] LOK-507 

Redownload Template

```
Projects
Lokr

Add epic

LOK-507

When I uploaded the CSV file then "Name" and Wallet address is Disappear but Beneficiary is added successfully

Description
When I uploaded the CSV file then "Name" and Wallet address is Disappear but Beneficiary is added successfully  

https://nimb.ws/PafiRd

Screen Name:Add Beneficiary
```



### [o] LOK-508

```
Projects
Lokr

Add epic

LOK-508

"Polkalokr" should be clickable and after clicking on this directed to Home Screen

Description
"Polkalokr" should be clickable and after clicking on this directed to Home Screen 

https://screenbud.com/shot/ba3e4eab-0d4b-40c8-b87c-47558c79fa46

Screen Name:Home Screen
```



### [o] LOK-509 

```
Projects
Lokr

Add epic

LOK-509

"Amount" field validation isn't working on the "Edit Manage Token Screen" When user enter the Amount more then "Lock amount" then validation message should be shown

Description
"Amount" field validation isn't working on the "Edit Manage Token Screen" When user enter the 
Amount more then "Lock amount" then validation message should be shown

https://nimb.ws/WM05it 

Edit Beneficiary Screen
```



###  LOK-484

```
Projects
Lokr

Add epic

LOK-484

Edit Beneficiary functionality isn't working on the "Manage Token" Screen

Description
Edit Beneficiary functionality isn't working on the "Manage Token" Screen
https://www.loom.com/share/3c986cc5f90c4a3bbc7c466f3058e1b6

Screen Name: Manage Token 
```



### LOK-483

```
Projects
Lokr

Add epic

LOK-483

"Graph"Zoom in and zoom out working fine but Zoom Percentage still same 100% whereas percentage should be increase and decrease


Attach

Add a child issue

Link issue

Description
"Graph" Zoom in and zoom out working fine but Zoom Percentage still same 100% whereas percentage should be increased and decrease 
https://nimb.ws/LSdXFm

Screen Name: Graph Screen
```



### LOK-292

```
Projects
Lokr

Token Lock

LOK-292

graph hover

Test Coverage
Description
When user clicks any where on line screen must show a pop up with following attributes:
1. Amount
2. Release date 
3. Release Time
4. Save button
5. Cancel button

once user saves the info. screen must create a node on graph line
when user hover over the node screen must show the saved information in card form and in read only format along with edit and delete button 
when user clicks on edit button the pop up must appear on top the card with prepopulated data (data is the last saved input of the user) in editable form
user can make changes in the field data and clciks on save to update the card 
if user clicks on delete button screen must ask the user "Are you sure you want to delete this setting?" Yes/no
-Yes - delete setting and card
-No - no action will be performed


Attachments (1)
```



### [o] LOK-511

```
LOK-511

First Letter should be the Capital of every word

Description

First Letter should be the Capital of every word 

https://screenbud.com/shot/08e65155-a2d2-4c7d-8d05-b79c1290cc29

Screen Name: Approval Screen
```



### [o] LOK-513

```
Projects
Lokr

Add epic

LOK-513

"Manage Token" Column heading is not aligned


Attach

Add a child issue

Link issue

Description
"Manage Token" Column heading is not aligned 

https://screenbud.com/shot/1673bfc0-8ada-46c5-82bf-54c63f23c927

Screen Name: Manage Token
```



### LOK-477

```
Projects
Lokr

Add epic

LOK-477

While creating a lock i can see 130+ API calls to the server which is very inconvenient for the performance.

Description
While creating a lock I can see 130+ API calls to the server which is very inconvenient for the performance.
https://drive.google.com/file/d/1u34JcUvZKXTHG9zqLA2zRe8IqooJmvag/view?usp=sharing
```



### [o] LOK-514

```
Projects
Lokr

Add epic

LOK-514

Lokr is not browser compatible (when I open the in Firefox then Lokr Design is disturbed )


Attach

Add a child issue

Link issue

Description
Lokr is not browser compatible (when I open the in Firefox then Lokr Design is disturbed )

https://drive.google.com/file/d/12h3MM1_lmPw9BSBzVwWicUdLkwcFHWGG/view?usp=sharing
```



### [o] LOK-463

```
Projects
Lokr

Add epic

LOK-463

Form Data Losing on Refresh... form state aren't maintain

Description
Form Data Losing on Refresh... form state isn't maintained on refresh 
https://nimb.ws/HBKdDi
```



### [o] LOK-472

```
Projects
Lokr

Add epic

LOK-472

During Create Beneficiary when I click on the "Refresh" then "Beneficiary" is disappear on the "Customise lock per beneficiary"

Description
During Create Beneficiary when I click on the "Refresh" then "Beneficiary" disappears on the "Customise lock per beneficiary"
https://nimb.ws/9OSVYp

Screen Name: Customise lock per beneficiary
```



### [o] LOK-480

```
Projects
Lokr

Add epic

LOK-480

When I deleted the node on the Graph then should be show Massage "Are you sure want to delete"

Description
When I deleted the node on the Graph then should be show Massage "Are you sure want to delete"
https://nimb.ws/Z0LtQw

Screen Name: Graph Screen
```



### LOK-542

```
Projects
Lokr

Add epic

LOK-542

"Copy Lock" functionality isn't working properly User is able to add the same beneficiaries again and again


Attach

Add a child issue

Link issue

Description
"Copy Lock" functionality isn't working properly User is able to add the same beneficiaries again and again  

https://drive.google.com/file/d/10Mid3BJWhC81AnI6a6mb5wax4RQbjxMh/view?usp=sharing

Screen Name: Copy lock
```



### LOK-545

```
Projects
Lokr

Add epic

LOK-545

When I added the beneficiaries through copy lock then lock amount is disappear


Attach

Add a child issue

Link issue

Description
When I added the beneficiaries through copy lock then lock amount is disappear 

https://screenbud.com/shot/280265a1-61f9-455e-aca6-049ceb3b5909

Screen Name: Add Beneficiary
```



### [o] LOK-519

```
Add epic

LOK-519

After completion "Token Lock"when user press the back button then user can see the all previous steps

Description
After completion "Token Lock" when user press the back button then the user can see the all previous steps

https://nimb.ws/c4WldZ

Screen Name: Copy Lock
```



### bug

- [ ] getLockup details  只返回一个数据
  - [ ] getByuserId 默认只返回一条数据, 加 all=true 返回所有数据
  - [ ] 所有接口不要返回多余数据
  
- [ ] beneficiary 存到 localstorage, 刷新后依然要有

- [ ] create beneficiary 优化
  - [ ] http://postgres.cn/docs/12/sql-insert.html
    - [ ] 用多行`VALUES`语法插入多个行：
  - [ ] http://postgres.cn/docs/12/dml-update.html
    - [ ] 你还可以在一个`UPDATE`命令中更新更多的列， 方法是在`SET`子句中列出更多赋值。
  - [ ] 其它接口也传数组, 减少请求
  
- [ ] 多个可选参数的接口写注释说明怎么用!
  - [ ] 可选参数用 switch 处理 url, 没选的参数不必要的参数不放到 URL 里
  
- [ ] select token page
  - [ ] coin_id not found error
  
- [ ] payment 完成后没有清空
  - [ ] 和重复创建问题
  
- [ ] claim token graph 空时报错

- [ ] Beneficiary summary 数据不对应, 只展示当前添加的

- [ ] 根据lockup是否跳转回首页前应判断有无页面需要的数据
  - [ ] 封装成函数
  
- [ ] claim-history 页面全局样式冲突, 让所有输入框全变成圆角

- [ ] customize-lock 页面 token lock available 金额精度不一致

- [ ] manage-token 

  - [ ] `Cannot read properties of undefined (reading 'market_cap')`

  



## London Stock Exchange

nextjs react

Severless lambada



```
cheng.cui@lseg.com
a135797Sa@

ccui2
Ruiku12345a@
```

#### Citrix Login

点击 已安装，

打开 Windows 10

### 1589

Font 一致

bar 高度和字体一致

传入 项目标题、bug数组

1. 解析bugs时间，进行分组，存储A，形成chart数据，进行渲染
2. 读取A，Modal Window 进行渲染（去掉'Over'），展示bug name 和 length

需要设置字体

堆积条形图



- [x] 表格前端测试
  - [x] cypress 
  - [x] canvas
- [x] 点击 modal window
- [x] modal 里面加关闭按钮
  - [x] BLACKDUCK : `${bug.componentName}-${bug.componentVersionName}`
  - [x] ServiceLine :  Application column appid
    - [x] add a title to the top of the modal reflecting the app/project
- [x] 图表移到底部
- [x] fromNow length



#### TO improve performance

1. Use prism transcations , essentially Promise.all for queries.
   - [ ] 事务
   - [x] userLog 接口也需要事务
2. `prisma.bug.groupBy` with `_count` instead of `findMany` 
   1. 拆分请求：
      - [ ] 图表用 `groupby _count` 统计数据，返回名字和数量、tag
      - [ ] Modal 单独请求具体数据
3. Quert by date bracket rather than manually sorting each bug.
   - [ ] 通过时间范围搜索
   - [ ] 事务
4. Use the length of Appids in `averageIssuseAge` to detect servicelines and adjust the query, rather than iterating over the response again.
   - [ ] 区分 ServiceLine 和 app 的搜索方法



1. 使用Prism transcations ，基本上是Promise.all进行查询。
2. `prisma.bug.groupBy`用`_count`代替`findMany`。
3. 按日期括号查询，而不是手动对每个bug进行排序。
4. 使用`averageIssuseAge`中的Appids的长度来检测服务线并调整查询，而不是再次迭代响应。



### 1667

新页面展示所有的Project

admin 激活 或 不激活

- admin name or email

```
CREATE TABLE appsecTeam (
   id SERIAL PRIMARY KEY,
   name varchar(255) NOT NULL,
   email varchar(255) NOT NULL,
)

CREATE TABLE appsecProjectLog (
   id SERIAL PRIMARY KEY,
   admin_id int
   project_id int
   action_time timestamp
   poject_status varchar(255) default 'disabled/enable'
)

add a flag at the project level that excluder results from the overall display
this change should happen on the web application ,and emails . only cnx admins(appsec team )should be able to exclude projects for now
in addition , a logging table must be used to log actions taken by the user.
please make sure to capture functional tests that meet these requirements
as always , get the UI mockup checked bu the team prior to implementation

在项目层面添加一个标志，将结果从整体显示中排除。
这个变化应该发生在网络应用程序和电子邮件上，目前只有cnx管理员（应用安全团队）能够排除项目。
此外，必须使用一个日志表来记录用户采取的行动。
请确保捕获满足这些要求的功能测试。
像往常一样，在实施前让团队检查UI模拟图。
```

- 分页



- attach screenshot underneath
- bar chats show all the projects which has 4 different colours represent 4 different period
- click on each colour inside each bar chart show all the bugs' name and its corresponding length
- length of each colour represent amount of bugs under each period



- [x] 怎么分辨admin

  - [x] ```
    groups.includes('APP-Cyber...Sec')
    ```

- [x] 接口是否需要登录

- [x] session在哪

- [x] Project 

  - [x] ```
    'api/v1/project/all'
    ```

    



- [x] service line display APP-ID 命名
- [x] AppSec 展示 projectName
  - [x] 高度动态增长 maximun height, pull
- [x] 颜色改成和其它图标一样



- [ ] ~~remove isHidden from userLog 改成 markHidden~~

  - [x] ```
    action ENUM('user_hid_project', 'user_show_project')
    ```

- [ ] 前后端交互与渲染



![截屏2021-12-02 07.22.14](./TODO.assets/截屏2021-12-02 07.22.14.png)





new serviceline

![截屏2021-11-27 14.01.34](./TODO.assets/截屏2021-11-27 14.01.34.png)

old

![截屏2021-11-27 14.03.17](./TODO.assets/截屏2021-11-27 14.03.17.png)



![截屏2021-11-27 15.01.14](./TODO.assets/截屏2021-11-27 15.01.14.png)





new 

![截屏2021-11-27 14.23.47](./TODO.assets/截屏2021-11-27 14.23.47.png)







appsec

New 

<img src="./TODO.assets/截屏2021-11-27 15.04.06.png" alt="截屏2021-11-27 15.04.06" style="zoom:50%;" />

<img src="./TODO.assets/截屏2021-11-27 15.18.15.png" alt="截屏2021-11-27 15.18.15" style="zoom:50%;" />





old

![截屏2021-11-27 14.44.20](./TODO.assets/截屏2021-11-27 14.44.20.png)

![截屏2021-11-27 14.45.30](./TODO.assets/截屏2021-11-27 14.45.30.png)

<img src="./TODO.assets/截屏2021-11-27 15.05.04.png" alt="截屏2021-11-27 15.05.04" style="zoom:50%;" />

<img src="./TODO.assets/截屏2021-11-27 15.15.56.png" alt="截屏2021-11-27 15.15.56" style="zoom:50%;" />







![截屏2021-11-27 13.39.15](./TODO.assets/截屏2021-11-27 13.39.15.png)

```
directionfact 3
fight 5
pretty 5
product 9
```

![截屏2021-11-27 13.38.48](./TODO.assets/截屏2021-11-27 13.38.48.png)

![截屏2021-12-01 14.03.37](./TODO.assets/截屏2021-12-01 14.03.37.png)



new old

![截屏2021-11-27 15.43.59](./TODO.assets/截屏2021-11-27 15.43.59.png)



![截屏2021-11-27 15.43.59](./TODO.assets/截屏2021-11-27 15.49.06.png)





right

![截屏2021-11-27 15.46.49](./TODO.assets/截屏2021-11-27 15.46.49.png)



New new

<img src="./TODO.assets/截屏2021-11-27 15.45.02.png" alt="截屏2021-11-27 15.43.59" style="zoom:50%;" />

<img src="./TODO.assets/截屏2021-11-27 16.44.32.png" alt="截屏2021-11-27 16.44.32" style="zoom:50%;" />



<img src="./TODO.assets/截屏2021-11-27 16.50.17.png" alt="截屏2021-11-27 16.50.17" style="zoom:50%;" />



old old

<img src="./TODO.assets/截屏2021-11-27 15.46.06.png" alt="截屏2021-11-27 15.46.06" style="zoom:50%;" />

<img src="./TODO.assets/截屏2021-11-27 16.48.29.png" alt="截屏2021-11-27 16.48.29" style="zoom:50%;" />





### 1570

we have to get the iscope buttons working 

we set scope (preload the scope and then let users change/update). 

- Implement a log table where user, actions are logged so we can tell who changed what 
- Implement a column in the applications to store state of in-scope for both SAST and SCA (not coverity and blackduck)
- Ensure RBAC controls are implemented and validated using functional tests

我们必须让incope按钮工作


我们设置范围（预先加载范围，然后让用户改变/更新）。

- 实现一个日志表，记录用户和行动，这样我们就可以知道谁改变了什么。
- 在应用程序中实施一列，为SAST和SCA（不是coverity和blackduck）存储范围内的状态。
- 确保实施RBAC控制，并使用功能测试进行验证。

- [ ] ```sql
  by default inScope, projects should be outScope by default
  
  any application that has the project in cnx should be marked as InScope
  
  inScopeForSAST and inScopeForSCA boolean field in applicaiton table
  
  
  默认为 inScope，项目应默认为 outScope
  
  任何在 cnx 中拥有项目的应用程序应该被标记为 InScope
  
  应用表中的 inScopeForSAST 和 inScopeForSCA 布尔字段
  
  
  
  applicaiton {
  	inScopeForSAST: false,
  	inScopeForSCA: false,
  }
  
  projects > 0, default inScope
  
  project {
  	
  }
  
  enum action {
  	UserInScopeForSAST,
  	UserInScopeForSCA,
  	UserOutScopeForSAST,
  	UserOutScopeForSCA,
  }
  
  userLog {
  	scope: action,
  }
  ```
  
- [ ] CNX (Cybernetix) inScope

  - [ ] Coverity look at the lates snapshot to identify the latest scan
  - [ ] Blackduck looks at the most recent version update or creation date

- [ ] Security

  - [ ] SAST: coverity
  - [ ] SCA: blackduck

- [ ] BSC

  - [ ] Business Services Catalogue

- [ ] `/app/1`

- [ ] `/app/appsec/81`

#### Update 1206

```
For non-admin users it would be good if we could display an indicator on the home page to show if an app is in-scope for SAST and / or SCA (perhaps a new column?), viewable by all users.

For admin user onlt ,similar to the non-admin home page view, but instead of read-only indicators, we could have editable checkboxes, allowing admins to set an app as in-scope, or alternative break this functionality out into a separte page, similar to the projects/all page.


对于非管理员用户来说，如果我们能在主页上显示一个指标，以显示一个应用程序是否在SAST和/或SCA的范围内（也许是一个新的栏目），所有用户都可以查看，那将是一件好事。

对于管理员用户，类似于非管理员的主页视图，但不是只读指标，我们可以有可编辑的复选框，允许管理员将一个应用程序设置为范围内，或替代性地将此功能分成一个单独的页面，类似于项目/所有页面。
```



### 1208

```
michal.kostyal  9:06 AM

good morning
9:06
I opened PR for profile selection
9:06
https://gitlab.com/vibepay/vibepay-app-v2/-/merge_requests/412
GitLab
Sign in
GitLab.com
9:06
could you please add there the change you did over the weekend (the icon)
9:06
https://files.slack.com/files-pri/TCVV40N8P-F02PJ9HJRT4/profilearrow.jpg
9:07
also I added there a data structure for profiles that we can potentially use
9:08
const MOCK_PROFILES = [
  {
    id: 'FxWkleODjYcH97zVvBEQGa548mE2',
    photoURL:
    displayName: 'Jan Peter',
    nickName: 'janpeter',      
  },
  {
    id: 'FxWkleODjYcH97zVvBEQGjiji',
    photoURL: '',
    displayName: 'James Gouse',
    nickName: 'jamesgouse',
  },
  {
    id: 'FxWkleODjsdfYcH97huhuh',
    photoURL:
    displayName: 'James' T-Shirts',
    nickName: 'jamestshirts',
  },
];
```

```
https://gitlab.com/vibepay/vibepay-app-v2/-/merge_requests/412
```

client submitted a pull requestcan you submit a pull request against his feature branch to merge your changesdon't submit a pull request against develop



![截屏2021-12-08 14.57.57](./TODO.assets/截屏2021-12-08 14.57.57.png)



### 1210

- [ ] 表格更改后的刷新不要打断排序
  - [ ] 排序状态提升到父组件



![截屏2021-12-03 15.29.58](./TODO.assets/截屏2021-12-03 15.29.58.png)



```
git rev-parse --short HEAD
```



### APPSEC-67



### 230

废弃CNX中的Tranche Bugs

被禁止的虫子班现在是2022年的新事物。
这张票跟踪了从应用程序和服务线页面上删除第1,2,3批的情况。
他们现在应该被简化为一个类别。被禁止的BUG"。



deprecate Tranche Bugs from CNX

banned bugs classes are now the new thing in 2022.
this ticket tracks the removal of tranches 1,2,3 from the app and service line pages.
instead they should now be simplified into one category: 'banned bugs'





### 232

调整服务线和应用程序页面的视图

有些页面显示 "关键"，但有些不显示--服务线和应用安全页面都应该显示相同的数据。

两个页面都必须显示：项目，总问题，关键，高，中等。




some pages show 'critical' but some do not - both service line and appsec pages should show the same data.

Both pages must show: projects, total issues, critical , high , medium.

Align views in service-lines and app pages



### 248

deprecating tranche bugs from the new Brand view(including the service-line division variants

- Deprecate tranche bugs from Summaryview component used by brand, division service-line views
- Replace with"banned bugs"count over last 3 months ( similar to severity charts on same page

从新的品牌视图(包括服务线分部变体)中废除档期错误。

- 从品牌、部门服务线视图所使用的Summaryview组件中删除批次错误。
- 替换为过去3个月的 "被禁止的错误 "计数（类似于同一页的严重性图表



### 249

Add label to y-axes on severity line charts in summaryView component

- Indicate which axis refers to which severity line for easier readability



在summaryView组件中的严重程度线图的Y轴上添加标签

- 标明哪个轴指的是哪个严重程度线，以便于阅读



### 257

Email teams if their project has not been scanned in over 6 months

1. update seed
2. Update email
3. unit test
4. add audit log for when emails are sent 



### 275

- Automate pulling user metadata from Black duck
  - Grab the username and last sign-time from Black duck and add it to the CNX DB using lambda

自动从Black duck中提取用户元数据

- 从Black duck中抓取用户名和最后登录时间，并使用lambda将其添加到CNX DB中。



### 276

- Automatically disable accounts that have not logged in for over 6 months
  - Query the CNX database (where coverity and DB user sigin-in information exists)
  - Query for all sigin-in times over 6 months
  - Disable these users in coverity and blackduck (depending on tool ) via the API
  - Send an email notification to users that have been disabled

自动禁用超过6个月没有登录的账户

- 查询CNX数据库（其中存在coverity和DB用户签到信息）。
- 查询所有超过6个月的签到时间
- 通过API在coverity和blackduck（取决于工具）中禁用这些用户
- 向被禁用的用户发送电子邮件通知

Finding dormant users

this endpoint finds all users on the system who have not successfully logged in eithin the specified amount of days

该端点查找系统中所有在指定天数内没有成功登录的用户。



## VibePay



```
cheng.cui@vibepay.com
Ruiku12345a@
```

```
  // if (__DEV__) {
  //   console.log('useFunctions emulator');
  //   usingEmulator = true;
  //   defaultApp.functions().useFunctionsEmulator('https://4ad9a9c4.ngrok.io');
  // }
```



### ios run

yarn

同时 yarn start

```bash
yarn, 
yarn start, 
cd ios, 
sudo gem install cocoapods, 
pod install, 
open VibePay.xcworkspace
```

```
Tartget 11.4

iPhone 11
```

```
Xcode > Preferences > Locations, Set Command line Tools
```

```
react-native run-ios --simulator "iPhone 11"

react-native run-ios --device "Said's iPhone"
```





### Android run

![截屏2021-12-04 11.28.54](./TODO.assets/截屏2021-12-04 11.28.54.png)

```bash
npx react-native run-android    

build from android studio, use run first, then use terminal

cd android && ./gradlew clean

chmod +x gradlew

cd ..

npx react-native run-android --variant=DevDebug

npx react-native run-android --variant=DevDebug --appIdSuffix='com.vibepay.app.north'



 dependencies {
        classpath("com.android.tools.build:gradle:3.5.4")
        classpath 'com.google.gms:google-services:4.3.3'
        classpath 'io.fabric.tools:gradle:1.28.1'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
```



```
cd android
./gradlew bundleRelease

./gradlew assembleRelease
```



```
local.properties 

sdk.dir=/Users/apple/Library/Android/sdk
```



```
FAILURE: Build completed with 2 failures.

1: Task failed with an exception.
-----------
* Where:
Build file '/Users/apple/work/gitclone/viberpay/android/app/build.gradle' line: 135

* What went wrong:
A problem occurred evaluating project ':app'.
> /Users/apple/work/gitclone/viberpay/android/local.properties (No such file or directory)

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

2: Task failed with an exception.
-----------
* What went wrong:
A problem occurred configuring project ':app'.
> com.android.builder.errors.EvalIssueException: compileSdkVersion is not specified. Please add it to build.gradle

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

* Get more help at https://help.gradle.org

BUILD FAILED in 26s
mac@MacdeMacBook-Pro android % cd android && ./gradlew clean
cd: no such file or directory: android
mac@MacdeMacBook-Pro android % ./gradlew clean                                

FAILURE: Build completed with 2 failures.

1: Task failed with an exception.
-----------
* Where:
Build file '/Users/apple/work/gitclone/viberpay/android/app/build.gradle' line: 135

* What went wrong:
A problem occurred evaluating project ':app'.
> /Users/apple/work/gitclone/viberpay/android/local.properties (No such file or directory)

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

2: Task failed with an exception.
-----------
* What went wrong:
A problem occurred configuring project ':app'.
> com.android.builder.errors.EvalIssueException: compileSdkVersion is not specified. Please add it to build.gradle

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
==============================================================================

* Get more help at https://help.gradle.org

BUILD FAILED in 16s

```





### 1204

- [ ] https://www.figma.com/file/dNm6bbXUZ4IXdxsZ3zpcGA/App-(Current)?node-id=6552%3A11882
  - [ ] 用户名右边加个箭头



### PROD-833 liang

```
Investigate multi-tenants for app
Description

Investigate feasibility of single users to own multiple "user profiles" within the app using the UserProfile entity. Current thinking is a single application users can own multiple user profiles and all actions taken by the application user will use the ID of the currently active user profile as their profile ID for operations.

ACs:

    Have a plan for implementing multi-tenancy in the app

    Discuss/share plan with Francis Williams 
```



### 1206

- [ ] mobile firestoreUserPublic

- [ ] ```
  FirestoreUserPublicProfileRepository. 
  MigratePin. 
  CommandFactory
  ```



### 1209



```
UserProfileCreator.ts

FirestoreUserPublicProfileRepository.ts
```



```shell
i  functions: Finished "europe-west2-ROOSTER-testFunctions-testCommand" in ~1s
i  functions: Beginning execution of "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate"
>  {"severity":"INFO","message":"Updating algolia search index for user [ [ { userId: '23432452345' } ] ]"}
⚠  functions: TypeError [ERR_HTTP_INVALID_HEADER_VALUE]: Invalid value "undefined" for header "x-algolia-api-key"
    at ClientRequest.setHeader (_http_outgoing.js:533:3)
    at new ClientRequest (_http_client.js:242:14)
    at new request (https.js:316:10)
    at Object.obj.<computed> [as request] (/Users/apple/.nvm/versions/node/v14.18.1/lib/node_modules/firebase-tools/lib/emulator/functionsEmulatorRuntime.js:230:31)
    at /Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/requester-node-http/dist/requester-node-http.cjs.js:33:72
    at new Promise (<anonymous>)
    at Object.send (/Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/requester-node-http/dist/requester-node-http.cjs.js:18:20)
    at retry (/Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/transporter/dist/transporter.cjs.js:222:38)
    at /Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/transporter/dist/transporter.cjs.js:235:16
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
⚠  Your function was killed because it raised an unhandled error.
>  Debugger listening on ws://0.0.0.0:9229/ac5a6443-fe9e-4794-a833-28b2c9786080
>  For help, see: https://nodejs.org/en/docs/inspector
>  {"severity":"WARNING","message":"Invalid onFirestoreUserUpdate detected [ [ { validation: [Object] } ] ]"}
i  functions: Beginning execution of "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate"
i  functions: Finished "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate" in ~1s
i  functions: Beginning execution of "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate"
i  functions: Finished "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate" in ~1s
>  {"severity":"WARNING","message":"Invalid onFirestoreUserUpdate detected [ [ { validation: [Object] } ] ]"}
i  functions: Beginning execution of "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate"
i  functions: Finished "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate" in ~1s
>  {"severity":"WARNING","message":"Invalid onFirestoreUserUpdate detected [ [ { validation: [Object] } ] ]"}
i  functions: Beginning execution of "europe-west2-ROOSTER-userFunctions-onFirestoreUserUpdate"
>  {"severity":"INFO","message":"Updating algolia search index for user [ [ { userId: 'ljsdlfjl3298' } ] ]"}
⚠  functions: TypeError [ERR_HTTP_INVALID_HEADER_VALUE]: Invalid value "undefined" for header "x-algolia-api-key"
    at ClientRequest.setHeader (_http_outgoing.js:533:3)
    at new ClientRequest (_http_client.js:242:14)
    at new request (https.js:316:10)
    at Object.obj.<computed> [as request] (/Users/apple/.nvm/versions/node/v14.18.1/lib/node_modules/firebase-tools/lib/emulator/functionsEmulatorRuntime.js:230:31)
    at /Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/requester-node-http/dist/requester-node-http.cjs.js:33:72
    at new Promise (<anonymous>)
    at Object.send (/Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/requester-node-http/dist/requester-node-http.cjs.js:18:20)
    at retry (/Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/transporter/dist/transporter.cjs.js:222:38)
    at /Users/apple/work/gitclone/vibepay-app-v2/backend/functions/node_modules/@algolia/transporter/dist/transporter.cjs.js:235:16
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
⚠  Your function was killed because it raised an unhandled error.

```

```
mac@MacdeMacBook-Pro functions % firebase functions:config:get
{
  "algolia": {
    "index": "dev_PUBLIC_PROFILE",
    "api_key": "50d6e9bd3eb0b951f5f034e40bbba744",
    "app_id": "DLVQ028QJV"
  },
  "pis_client": {
    "payment_status_webhook_uri": "https://europe-west2-vp-dev-app1.cloudfunctions.net/ROOSTER-paymentFunctions-onPaymentStatusUpdate",
    "single_payment_callback_uri": "https://vp-dev-app1.web.app/app/payment-complete"
  },
  "integration": {
    "streamelements": {
      "client_secret": "a050950e3ce0861129a83db97fb53e8d",
      "client_id": "30acae2a5f930172",
      "redirect_uri": "https://app.vibepay.com/oauth/streamelements"
    },
    "streamlabs": {
      "client_id": "PAfVXtRe5eyONXq1ls1iIb8pVrJ1LsfiXibTVHfU",
      "redirect_uri": "https://app.vibepay.com/oauth/streamlabs",
      "client_secret": "zX948q1AghcqeCuFc3N3UqQFSSTd6ijxQKc8hwsl"
    }
  },
  "salesforce_data": {
    "client_id": "marketing-client",
    "scope": "marketing-api",
    "client_secret": "NNBFXhpD^HN&CmX3eZn$6l!SuJ3jPO"
  },
  "ghost": {
    "key": "5f9aad4deafd850001bd4479:4b4591ede4052016c22de63f645929ec0cdf82e56ae54e0c8b704beaaaee1e83"
  },
  "salesforce": {
    "scope": "marketingpay-api",
    "client_secret": "NNBFXhpD^HN&CmX3eZn$6l!SuJ3jPO",
    "discovery_url": "https://identity-api-wlqoqarmlq-nw.a.run.app",
    "client_id": "marketingpay-client"
  },
  "gateway": {
    "audience": "https://payments-gateway.vibepay.com",
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imw4S0tRNmw1LTUtREUyaU9YM0ExYSJ9.eyJpc3MiOiJodHRwczovL3ZpYmVwYXktZGV2ZWxvcG1lbnQuZXUuYXV0aDAuY29tLyIsInN1YiI6IjRjbGF4a0pJNmlJWEU2bFA3ZjJ6R0c4d1dkZGlOODl2QGNsaWVudHMiLCJhdWQiOiJodHRwczovL3BheW1lbnRzLWdhdGV3YXkudmliZXBheS5jb20iLCJpYXQiOjE2MjkyMDMwNDUsImV4cCI6MTYzMTc5NTA0NSwiYXpwIjoiNGNsYXhrSkk2aUlYRTZsUDdmMnpHRzh3V2RkaU44OXYiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.aLhLAKNKcNk0JxEmID0p5MTqlstc64MWTjlyIoqtmCma6JGdA-_NaT4BiXAh4D2JhqNzH_cBaFHFvSmoycxl5NFTsmg81bmfXdvp0sVyOxpCb3K4Y2JNVV_Q1h-HnbKVtRvsvqnTW_BJIWFkjJMk9XJWJHz4y6wdmVxJowfpiXqMkvMfmNyeBPzdUyvjGp5i0cHdx5N0re6nydSRNr0nEJtz5h_L5UCGCV3-qBKPdoLu7k40kzhbwpvsPFOSaTrh8vwUHWi0oiNFwhm7DhuHG3sgEg3DVrgDKxK_gRYzL_yLB16Lswh4NWpwkWk4ChmGepkkCp9jRNAP2jwd-Wq1fg",
    "client_id": "4claxkJI6iIXE6lP7f2zGG8wWddiN89v",
    "auth_endpoint": "https://vibepay-development.eu.auth0.com/oauth/token"
  },
  "app": {
    "package_name_bundle_id": "com.vibepay.dev.app1",
    "app_url": "https://vp-dev-app1.web.app",
    "dynamic_uri_prefix": "https://vpdevapp1link.page.link",
    "account_linking_redirect_uri_back_to_app": "https://app.vibepay.com/app/ais-complete?scheme=vibepay-dev",
    "account_linking_redirect_uri": "https://europe-west2-vp-dev-app1.cloudfunctions.net/ROOSTER-aisFunctions-onAISAccountRedirect",
    "web_api_key": "AIzaSyAbg6kkfqIMXn69eFwV2rlEb96UwH4ChE8",
    "package_name": "com.vibepay.dev.app1"
  },
  "http": {
    "push_notification_key": "69352a8f-1c11-4108-ae7c-7ef19d3b77bc",
    "ghost_key": "e293e130-19f8-11eb-adc1-0242ac120002"
  }
}
```



### kill 

查找端口进程:

```
lsof -i:8000
```

会把所有的占用8000端口的进程都列出来,找到需要关闭的那个进程,比如下面这个:

```
python  85877 yhjin    4u  IPv4 0x8c64242f32f23f1f      0t0  TCP localhost:irdmi (LISTEN)
```

记住它的id

终止进程:

```
kill 85877
```



### TypeScript

1. ```ts
   interface
   ```

2. ```ts
   class 
   
   class Snake extends Animal
   
   public
   private
   protected 派生类中仍然可以访问。
   readonly 只读属性必须在声明时或构造函数里被初始化。
   
   static
   abstract class Animal
   abstract makeSound(): void;
   
   class Point {
       x: number;
       y: number;
   }
   
   
   把类当做接口使用
   interface Point3d extends Point {
       z: number;
   }
   
   let point3d: Point3d = {x: 1, y: 2, z: 3};
   ```

3. 泛型

   ```ts
   类型变量 T
   function identity<T>(arg: T): T {
       return arg;
   }
   
   泛型类型
   
   function identity<T>(arg: T): T {
       return arg;
   }
   
   let myIdentity: <T>(arg: T) => T = identity;
   
   
   我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
   
   function identity<T>(arg: T): T {
       return arg;
   }
   
   let myIdentity: <U>(arg: U) => U = identity;
   
   泛型接口
   
   
   interface GenericIdentityFn {
       <T>(arg: T): T;
   }
   
   function identity<T>(arg: T): T {
       return arg;
   }
   
   let myIdentity: GenericIdentityFn = identity;
   
   
   把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）。 这样接口里的其它成员也能知道这个参数的类型了。
   
   interface GenericIdentityFn<T> {
       (arg: T): T;
   }
   
   function identity<T>(arg: T): T {
       return arg;
   }
   
   let myIdentity: GenericIdentityFn<number> = identity;
   
   
   泛型类
   泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
   
   class GenericNumber<T> {
       zeroValue: T;
       add: (x: T, y: T) => T;
   }
   
   let myGenericNumber = new GenericNumber<number>();
   myGenericNumber.zeroValue = 0;
   myGenericNumber.add = function(x, y) { return x + y; };
   
   
   在泛型约束中使用类型参数
   你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束。
   
   function getProperty(obj: T, key: K) {
       return obj[key];
   }
   
   let x = { a: 1, b: 2, c: 3, d: 4 };
   
   getProperty(x, "a"); // okay
   getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
   
   在泛型里使用类类型
   在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
   
   function create<T>(c: {new(): T; }): T {
       return new c();
   }
   ```

4. 高级类型

   1. Intersection type
   2. union type
   3. type guards and differentiating type



### Backend 

- [ ] firestore

  1. ```
     doc()
     docs()
     
     
     add()
     .add()方法会自动为我们生成一个ID。 请注意，我们不能直接使用此引用来获取数据。 但是，我们可以将ref传递给doc方法来创建另一个查询。
     
     set()
     set与add的不同之处在于需要在添加数据时指定我们自己的id。
     如果要合并一个旧文档和一个新文档，而不是覆盖它，我们需要向.set()传递一个附加参数，并将属性merge设置为true。
     
     update()
     使用.update()有帮助的是，与.set()不同，它不会覆盖整个文档。 与.set() ，我们需要引用单个文档。
     
     delete()
     collection()
     
     where()
     <, <=, ==, >, >=, array-contains, in, or array-contains-any
     
     < ， <= ， == ， > ， >= ， array-contains ， in或array-contains-any
     
     
     get()
     data()
     transcation()
     limit()
     orderBy()
     ```

     

- [ ] Google functions

  1. ```
     
     ```

     

- [ ] RunType

  1. ```
     import {Dictionary, InstanceOf, Literal, Number, Partial, Record, Static, String, Union, Unknown} from 'runtypes'
     ```

     

- [ ] algoliasearch

### Frontend

- [ ] react-redux-firebase

  1. useFirestoreConnect

     ```javascript
     export default function SomeComponent() {
       useFirestoreConnect([
         { collection: 'todos' } // or 'todos'
       ])
       const todos = useSelector((state) => state.firestore.ordered.todos)
       
         useFirestoreConnect(() => [
         { collection: 'todos', doc: todoId } // or `todos/${props.todoId}`
       ])
       const todo = useSelector(
         ({ firestore: { data } }) => data.todos && data.todos[todoId]
       )
     }
     ```

  2. firestoreConnect

     ```javascript
     export default compose(
       firestoreConnect(() => ['todos']), // or { collection: 'todos' }
       connect((state, props) => ({
         todos: state.firestore.ordered.todos
       }))
     )(SomeComponent)
     ```

  3. Store as

     ```javascript
       firestoreConnect((props) => [
         { collection: 'projects' },
         {
           collection: 'projects',
           where: [['uid', '==', '123']],
           storeAs: myProjectsReduxName
         }
       ]),
       connect((state, props) => ({
         projects: state.firestore.data.projects,
         myProjects: state.firestore.data[myProjectsReduxName] // use storeAs path to gather from redux
       }))
     ```

     

- [ ] redux-observable

- [ ] rxjs

- [ ] rxjs/operators

- [ ] react-native-firebase/app

- [ ] reduxjs/toolkit



### Nav

1. Nav.screen 下的都会有



### PROD-868

```
PROD-868
Show settings on profile switch
Description

When a user switches profile, the context should switch to show appropriate settings.

ACs:

    Danny to specify which settings are global and which are context-specific

    Confirm the above works
```

1. profile 完全分离, 相当于新用户

### PROD-869

```
PROD-869
Show linked bank accounts on profile switch
Description

When a user switches profile, the context should switch to show the bank accounts linked to that profile.

AC:

    Initially, on a newly created profile, no bank linked bank accounts should exist

    After linking at least one or more bank accounts, and switching out of and back to the user profile, the linked bank account(s) should be shown

    AIS transactions for the linked bank account should be shown
```

1. 

### PROD-870

```
PROD-870
Show channels on profile switch
Description

When a user switches profile, the context should switch to show the channels that they share with other users, with Vibe, and with linked bank accounts.

ACs:

    When the user first switches to the new profile, there should be a channel with a welcoming message from VibePay. (This channel should update when new blog posts are created.)

    When the user links bank accounts from the profile, this should be displayed in relevant channels with the banks in question

    If the user has made payments from the profile, these should be displayed in relevant channels

    If the user has made requests from the profile, these should be displayed in relevant channels

Activity
```

1. payment 
   1. channel 欢迎消息

### PROD-871

```
PROD-871
Link push notifications to correct profiles
Description

When a user creates multiple profiles, push notifications should be linked to the correct profiles.

ACs:

    When the app is backgrounded, tapping on a push notification should open the app in the context that the notification was sent to.

    When the app is foregrounded, push notifications for the currently active profile should be suppressed

    When the app is foregrounded, push notifications for profiles that are not active, should not display in the active context

    Danny to decide how to display badge (or similar) for notifications for profiles that are not active.
```



### 871 pushNotification

1. 只显示当前用户的通知
2. app 在后台, 推送消息打开 app, 和对应界面



### PROD-878

```
PROD-878
New profiles need their IDs added to a users claims
Description

When a new profile is created, we need a way of other services to determine which profiles a user owns via their JWT. To do this in firebase we can use the admin SDK to update the users custom claims
getAuth()

  .setCustomUserClaims(uid, { profiles: [<profileId1>, <profileId2>, etc...] })

  .then(() => {

    // The new custom claims will propagate to the user's ID token the

    // next time a new one is issued.

  });

Steps:

Using the firebase-admin sdk

    Retrieve the current users claims

    Add the new profile id to the profiles array if it exists, otherwise create the profiles array

    call "setCustomUserClaims" on the auth for the user to update their claims.

 

https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims
```

- [x] 切换 profile 不刷新消息
- [x] 支付失败
- [x] profile 显示银行连接
- [x] Archived 失效
  - [ ] Archived 消息过滤分别显示
- [ ] 绑定解绑银行卡
  - [ ] 解绑银行卡时删除子账号的 acounts
- [ ] 查看交易记录不对应





### PROD-905

```
Account Switching
PROD-905
Support and respond to feedback from Danny and Joseph regarding bug fixes and tweaks to 3.15 candidate app.
Description
Add a description...
```



### PROD-907

```
PROD-907
Support Warren with integrating Extreme Push into the app should this be ready.
Description
Add a description...
```



## Fibre 

### Fibre 提交步骤

1. 检查分支名是否正确
2. 必须使用 git 命令行 commit 
3. 界面完成后，写单元测试，yarn lint
4. `yarn start cf-product-service:e2e`
5. `yarn start cf-product-service:test`
6. push  前合并主分支
7. pull request 信息要准确
8. 提交后查看 pull request 确保测试通过
9. 根据评论修改，重复上述步骤直到合并





```
cheng.cui@communityfibre.co.uk
Ruiku12345a@

cheng.cui@communityfibre.co.uk
Cc.11223344
```



### https://nestjs.com/



### https://ionicframework.com/



### https://nx.dev/



### https://lerna.js.org/



### redis



 查看安装及配置文件位置

- Homebrew安装的软件会默认在`/usr/local/Cellar/`路径下

- redis的配置文件`redis.conf`存放在`/usr/local/etc`路径下

- ```
  redis-server
  
  or
  
  brew services start redis
  
  or
  
  redis-server /usr/local/etc/redis.conf
  
  redis-cli -h 127.0.0.1 -p 6379
  redis-cli shutdown
  sudo pkill redis-server
  ```



### postgresql



```
To restart postgresql after an upgrade:
  brew services restart postgresql
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/postgresql/bin/postgres -D /usr/local/var/postgres
```



```
nx run cf-auth-service:run-migration
```



### docker



```
docker-compose up
```



### TypeORM

https://typeorm.io/#/

Object relational mapping 



`DTO`（数据传输对象）



### CFLCRM2-45



```
Products - Create New Product - UI - Create Stepper Component

Description
Create a new shared stepper component to display a step-by-step navigation bar

Criteria:

Shows the current step/page the user is currently in:

Highlights the current step

Allows navigation to all steps as long as they have been validated

Mihail Golban 
2 hours ago

Branch: CFLCRM-904-stepper-component
PR: https://github.com/community-fibre/cfl-crm/pull/142 - Connect to preview 


Mihail Golban 
23 hours ago

To do:

unit tests

stepper default UI

allow the user to enter a multi-step flow at any point.
Jest testing library - unable to do testing in components that import 3rd party libs via ESM

Description
Please see comments in - https://github.com/community-fibre/cfl-crm/pull/145

Needs some time to investigate and alternative configuration for unit testing. Otherwise we won't be able to test certain components


Find there create product

This is the default UI, but stepper component should allow you to pass custom component via render prop

For instance if I pass the label prop  it should render default UI as you see in the image above. But you can also pass a custom component to render }/> 

Maybe you know how to do it better. You can write it from scratch, it's up to you. Good luck!
```



```
你应该只做导航栏
不需要添加步骤的内容。你只需要创建Stepper组件。鉴于此，你应该删除Stepper文件夹中的文件。
不要在你的代码中留下评论，除非是出于文档的目的。

是的，不幸的是，还没有完全达到。如果你有什么不确定的地方，或者事情太含糊，请不要犹豫，向我们说清楚。
是的，正如票面上所说，这需要一个通用的、共享的组件，我们可以把 "步骤 "的列表传给它来显示。当前活动的步骤可能应该在父组件中管理（就像一个管理的输入字段），它不需要知道Swiper。例如，像这样的东西...
每个步骤的实际内容是https://communityfibre.atlassian.net/browse/CFLCRM2-47 ticket的内容，而且比这多一点。它必须是一个Formik表单，并处理提交等。
哦，我们还缺少单元测试。如果你不确定这一点，请给我们留言
请使用ionic css变量
childProps有误导性。接口应该有I的前缀。

你似乎已经在figma中创建了创建产品的表单。
这应该是一个共享组件 @崔成
可以和所有东西一起使用的通用组件

通过www.DeepL.com/Translator（免费版）翻译
```



```
Products - Create New Product - UI - Create Stepper Component

Description
Create a new shared stepper component to display a step-by-step navigation bar

Criteria:

Shows the current step/page the user is currently in:

Highlights the current step

Allows navigation to all steps as long as they have been validated

Branch: CFLCRM-904-stepper-component
PR: https://github.com/community-fibre/cfl-crm/pull/142 - Connect to preview 

To do:

unit tests

stepper default UI

allow the user to enter a multi-step flow at any point.



Find there create product

This is the default UI, but stepper component should allow you to pass custom component via render prop

For instance if I pass the label prop  it should render default UI as you see in the image above. But you can also pass a custom component to render 
```



### CFLCRM2-85



```
为了了解背景，请阅读标题中的票据。

这是为一个导入Swiper的组件创建测试的基本例子。

如果你运行npx nx test cf-crm-app，你会看到错误SyntaxError。不能在模块外使用导入语句

因为Jest还不擅长处理ESM模块（见https://jestjs.io/docs/ecmascript-modules），我认为它试图通过CommonJS导入库（期望import/exports被转换为require()）。

Swiper库可能有问题，在他们的./node_modules/swiper/package.json中，他们的主键被设置为./swiper.esm.js，而它应该被设置为一个CommonJS文件，而不是ESM。因此，当解析lib时，Jest正在读取那个主键，从而导致了这个错误。

正如你在这个PR的旧差异中所看到的，为了解决这个问题，我更新了jest.config.js，基本上通过babel-jest运行/node_modules/swiper来转译那些导入/导出到require()，这似乎是有效的。我还不得不通过ts-jest运行，以摆脱接下来与Typescript有关的错误。在这一点上，测试能够运行，但现在代码文件中出现了一个问题。在apps/cf-crm-app/src/app/pages/Products/CreateNewProductModal.tsx中，有一个错误，指定的导入 { Swiper, SwiperSlide } from 'swiper/react'; 为空。

这就是我所得到的。

Jest测试库 - 无法在通过ESM导入第三方库的组件中进行测试
说明
请看评论 - https://github.com/community-fibre/cfl-crm/pull/145

需要一些时间来调查和替代单元测试的配置。否则我们将无法测试某些组件。

上述PR中介绍的Swiper库以各种格式导出其代码；CommonJS、ESM、浏览器友好等。当我们在代码中导入该库并构建时，似乎是通过ESM方法导入的，并且在运行代码时绝对正常。

说白了，'ESM'方法只是意味着，库现在在发布他们的代码时，其导入/导出语句仍然是完整的。而在Node开始原生支持导入/导出之前，所有的库都必须将他们的代码发布到CommonJS（用require()代替导入/导出）。见https://nodejs.org/api/esm.html

然而，当我们创建一个单元测试来测试一个导入Swiper库的组件时，它在测试环境中没有正确导入库，并抛出错误。这是因为正常的开发环境和Jest环境的构建过程是不同的。Jest测试环境是通过Nx自己的@nrwl/jest、ts-jest和babel-jest以及jest.config.js中定义的配置来构建的，而正常的开发环境则主要通过正常的tsc运行。所以这就是为什么Swiper的导入方式有差异。

请拉动并运行https://github.com/community-fibre/cfl-crm/pull/149 - 连接到本地预览，以获得该问题的演示。

Using all Ionic components except Swiper.js, to be used for the step-by-step form. However that's because Ionic have deprecated their ion-slides component and recommend this instead: https://ionicframework.com/docs/api/slides
Jest is having a really hard time resolving the Swiper.js lib because it uses the new official ESM module structure (off the back of Node now supporting import/export). So any attempts at testing a component with Swiper in it fails. Need to look at Jest setup separately as it could take some time to resolve. Harder to investigate too with Nx abstracting Jest
Relates to https://jestjs.io/docs/ecmascript-modules
And
https://gist.github.com/rstacruz/511f43265de4939f6ca729a3df7b001c
```





https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

```
Jest can't currently resolve "main"less ESM packages (as these instructions prescribe), so the instructions under "I'm having problems with ESM and Jest" don't necessarily help in the least.

See facebook/jest#11373 & facebook/jest#9771 ...
```



### CFLCRM2-87



```
Remove auth step from UI
```



### CFLCRM2-102



```
Projects
CFL CRM - Team 2 - A...

Add epic

Spike - Reverse engineer mobile app API calls via network tab.
```

```
It's a tough one 

What we actually would like to understand, at least for now, is how the products tie into the current mobile application. Which screens call the products API, which APIs contain products , things like that
5:24

It might be a little hard to do in the mobile app
5:24
I've never even seen the mobile app so it will definitely take some collaboration between all of us

The idea is we modify the existing API to use our new API . We just have to make sure we keep the same data return format from our API
5:29
so we don't have to modify the existing mobile app code or the existing UNI 1 code
5:29
that's the idea at least
```



### CFLCRM2-105



```
Projects
CFL CRM - Team 2 - A...

Add epic

CFLCRM2-105

[API] Products - Add filtering support

Description
Allow for filtering based on field/column.

Create Filter DTO that is generic enough to filter by any column

Example query:

?filter[productName]=whatever&filter[price]=123

Linked issues

blocks
Issue type: Story
CFLCRM2-108
Priority: Medium

TO DO
```



### CFLCRM2-108



### CFLCRM2-111



```
Projects
CFL CRM - Team 2 - A...

Add epic

CFLCRM2-111

[DELETE ] [API] Products - Add filters listing endpoint

Description
An endpoint that returns the filters that will populate the frontend product filters dropdown.

Example:

http://api.communityfibre.co.uk/product-service/filters

Returns:

{

[ 'productType',

'productStatus',

'category', …]

}


Linked issues
```



### CFLCRM2-110

```
Add epic

CFLCRM2-110

[UI] List products - Add search support

Description
Should allow for searching on the following fields:

descriptions (short, long, .. )

name

display name

Search trigger: Keystroke

Debounce time: 300ms


Linked issues
```



### CFLCRM2-123

```
[API] Products - Refactor to support different product types

Description

General Products Context
The Uni 1 Products system is inflexible in that all products/services are expected to be broadband-like with little support for other types of products/services that can have their own unique requirements and fields of information. When creating a 'Telephone' product for example, the creator is asked to make broadband specific selections and provide unrelated details such as download/upload speeds. It is not possible to capture important Telephone specific information such as 'free call minutes per month' without it being forced into a broadband product type structure, causing display/selection issues downstream.

The lack of product type flexibility has also lead to unusual architectural and report-unfriendly side-effects such as treating an installation service (which is a product/service type in its own right) as a 'Product Price' within the old system. A 'Product Price' in the old system is a means of capturing price adjustments based on the customer's selected payment frequency; the price change based on a monthly/quarterly/annual selection. But this same system is being used as a means to tack-on the one-off cost of an installation rather than installation being treated as a (required) additional product/service applied to the customer order.

As an improvement, we are looking to cater for different product types. This will give us the freedom to produce unique Product creation processes if required. For example, the step-by-step process of creating a broadband product could be different to the process of creating a Telephone product, each with their own unique selections and data fields pertinent to only that product. That could be broadband/telephone/TV specific categorisations, different available contract lengths for telephone, broadband and TV, a different set of fields such as 'upload/download speeds' for broadband and ‘free call minutes p/m' for telephone etc. Through the admin system we can also better tailor the display and search features to suit the product type of interest e.g. the list of broadband products can include download/upload speed columns and the list of Telephone products can display free minutes p/m, rather than trying to display everything in a single, restricted view. Search fields/filtering when trying to find a desired product can be also be better tailored to that product’s type. 

Developer Notes
This only pertains to the API/database side. Not UI changes.

This is to refactor the Products endpoint and DB schema to support different product types, starting with the Broadband specific product type. The Product entity/table would now only contain the primary product ID and fields that are shared across each product. To keep to true relational data, a new table/entity would then have to be created for every new type of product e.g. BroadbandProduct which contains the fields unique to that product type. A boradband product would then be represented across two tables/entities, the Product table/entity with fields that all products have in common and then the BroadbandProduct table/entity would contain the broadband specific product data (upload/download speeds for example). The primary Product table/entity would then need columns for linking from Product to the product specific tables.  

For example. the Product table/entity fields could be;

    ID

    shortDescriptionInternal

    longDescriptionInternal

    shortDescriptionPublic

    longDescriptionPublic

    broadbandProductID

    telephoneProductID

    tvProductID

... where of course only one of the three boradband/telephone/tv product specific ID fields would have an ID value and the others would be null.

The impact on the API TBC with Luis
```

```
[API] 产品 - 重构以支持不同的产品类型

描述

一般产品的背景
统一1号产品系统缺乏灵活性，所有产品/服务都被认为是类似于宽带的，对其他类型的产品/服务几乎没有支持，这些产品/服务可能有自己独特的要求和信息领域。例如，当创建一个 "电话 "产品时，创建者被要求进行特定的宽带选择并提供无关的细节，如下载/上传速度。如果不把 "每月免费通话时间 "等重要的 "电话 "特定信息强行纳入宽带产品类型结构，就不可能捕捉到这些信息，从而导致下游的显示/选择问题。

缺乏产品类型的灵活性也导致了不寻常的结构和报告不友好的副作用，例如在旧系统中把安装服务（它本身就是一个产品/服务类型）当作 "产品价格"。旧系统中的 "产品价格 "是根据客户选择的付款频率来捕捉价格调整的一种手段；价格变化是基于每月/每季度/每年的选择。但是，这个系统也被用作一次性安装费用的手段，而不是将安装作为应用于客户订单的（必要的）额外产品/服务。

作为一项改进，我们正在寻求满足不同的产品类型。如果需要，这将使我们能够自由地制作独特的产品创建过程。例如，创建宽带产品的步骤可以与创建电话产品的步骤不同，每个产品都有自己独特的选择和只与该产品有关的数据字段。这可能是宽带/电话/电视的具体分类，电话、宽带和电视的不同合同长度，不同的字段，如宽带的 "上传/下载速度 "和电话的 "免费通话分钟/分钟 "等等。通过管理系统，我们还可以更好地定制显示和搜索功能，以适应感兴趣的产品类型，例如，宽带产品列表可以包括下载/上传速度栏，电话产品列表可以显示免费通话时间/分钟，而不是试图在一个单一的限制性视图中显示所有内容。当试图找到一个所需的产品时，搜索字段/过滤也可以更好地适应该产品的类型。

开发者须知
这只涉及到API/数据库方面。不是用户界面的变化。

这是为了重构产品端点和数据库模式，以支持不同的产品类型，从宽带的特定产品类型开始。产品实体/表现在将只包含主要的产品ID和每个产品共享的字段。为了保持真正的关系型数据，必须为每一种新的产品类型创建一个新的表/实体，例如BroadbandProduct，其中包含该产品类型特有的字段。一个宽带产品将通过两个表/实体来表示，产品表/实体包含所有产品共有的字段，然后宽带产品表/实体将包含宽带特定的产品数据（例如上传/下载速度）。然后，主要的产品表/实体将需要列，以便从产品链接到具体的产品表。 

例如，产品表/实体的字段可以是。

    ID

    内部短描述（shortDescriptionInternal

    longDescriptionInternal

    短描述公开

    长描述公开

    宽带产品ID

    电话产品ID

    电视产品ID

......当然，在宽带/电话/电视三个产品特定的ID字段中，只有一个有ID值，其他的都是空的。

对API的影响有待与Luis讨论
```



```
Projects
CFL CRM - Team 2 - A...

Add epic

CFLCRM2-123

[API] Products - Create Broadband Product Entity

Descriptions
Read the following ticket for more context:

CFLCRM2-121: [API] Products - Refactor to support different product typesTO DO


In this ticket, we want to remove the product type-specific fields from the Product entity and move them to a product type-specific entity (Broadband in this case). 
Example: Broadband products have downloadSpeed and uploadSpeed, therefore these fields should not exist in a Product Entity but in a BroadbandProduct entity.

Remove the following fields from the Product entity, create a BroadbandProduct entity and move them to there:

  @Column()
  downloadSpeed: number;

  @Column()
  averageDownloadSpeed: number;

  @Column()
  uploadSpeed: number;

  @Column()
  averageUploadSpeed: number;
 

Dev Notes / Requirements: 

The Product entity should have a One-to-One relationship with the BroadbandProduct

therefore Product will have a broadBandProductId foreign-key field, which will be nullable. This field will reference the BroadbandProduct id field

Product listing should return the joined data Product + BroadbandProduct using the following format

[
  {
    "id": "xyz"
    "name": "My Product",
    "shortDescription": "My Short Description",
    "longDescription": "My Long Description",
    "type": "broadband",
    ...
    "fields": {
      "uploadSpeed": 123,
      "downloadSpeed": 123,
      ...
    }
  }
]
```

```
项目
CFL CRM - 团队2 - A...

添加事件

CFLCRM2-123

[API] 产品 - 创建宽带产品实体

说明
阅读以下票据以了解更多背景。

CFLCRM2-121: [API] Products - Refactor to support different product typesTO DO


在这个票据中，我们想从产品实体中删除产品类型的特定字段，并将它们移到产品类型的特定实体（本例中为宽带）。
例子。宽带产品有downloadSpeed和uploadSpeed，因此这些字段不应该存在于产品实体中，而是存在于BroadbandProduct实体中。

从产品实体中删除以下字段，创建一个BroadbandProduct实体并把它们移到那里。

  @Column()
  downloadSpeed：数字。

  @Column()
  averageDownloadSpeed：数字。

  @Column()
  uploadSpeed: 数字。

  @Column()
  averageUploadSpeed: 数字。
 

开发说明/要求。

产品实体应该与宽带产品有一对一的关系。

因此，产品将有一个broadBandProductId外键字段，它将是空的。这个字段将引用BroadbandProduct的id字段。

产品列表应使用以下格式返回联合数据Product + BroadbandProduct

[
  {
    "id": "xyz"
    "名称"。"我的产品"。
    "shortDescription": "我的短描述"。
    "longDescription": "我的长描述"。
    "类型": "宽带"。
    ...
    "字段": {
      "上传速度": 123,
      "下载速度": 123,
      ...
    }
  }
]

通过www.DeepL.com/Translator（免费版）翻译
```

- [x] 修改 entity
- [x] 修改数据库
- [x] 修改 seed
- [x] 写入数据库
- [ ] 修改 api
- [ ] 提交



### CFLCRM2-131

```
Promotions

CFLCRM2-131

[API] Promotions - BundlePromotion CRUD

Description
As we are creating a new microservice for promotions we need to be able to perform CRUD operations on promotions : 

Endpoint is BundlePromotion (Luis Valdez to add endpoints)
Link Promotion & BundlePromotion entities
Include entity relationship diagram
Examples of POST requests (Luis Valdez )

Create a BundlePromotion and create relation to parent promotion

Update a BundlePromotion

Delete a BundlePromotions

Get all promotions

Get a specific promotion

DevNotes:

Validate all fields properly in a way that is flexible for us to add other types of promotions in the future
```



## ECS

```
test aws account

chengcuichina2021@gmail.com

Ruiku12345
```

https://sb97digital.atlassian.net/welcome/software

```
cheng.cui@ecs.co.uk
London24411

login via microsoft to see the jira ticket documentation
cheng.cui@ecs.co.uk
[4:12 PM] London24411
```

```
cheng.cui@ecs.co.uk

Ruiku12345

NO NEED TO LOGIN NOW FOR BITBUCKET
```



```
ecs.cheng.cui	ltCLhyanIFM(zd4	https://453693897464.signin.aws.amazon.com/console

deepl12345
```

```
Bitlocker: LT06132021
Username: Cheng.Cui
Password: M1llionaire
```

```
Jfrog

cheng.cui
Apple@123
```

### JFrog Set Me Up

For your npm command line client to work with Artifactory, you first need to set the default npm registry with an Artifactory npm repository using the following command:

```
npm config set registry https://sb97digital.jfrog.io/artifactory/api/npm/npm/

npm config set registry https://registry.npmjs.org
```

If you are working with scoped packages, run the following command:

```
npm config set @<SCOPE>:registry https://sb97digital.jfrog.io/artifactory/api/npm/npm/
```

There are two ways to authenticate your npm client against Artifactory: using the npm login command or using basic authentication.

**Using npm login**
Run the following command in your npm client. When prompted, provide your Artifactory login credentials:

```
npm login
```



**Using basic authentication**
Alternatively, you can paste the following into the *~/.npmrc* file (in Windows %USERPROFILE%/*.npmrc*):

```
_auth = Y2hlbmcuY3VpOkFQOFp3MWhEakd5R3FFYUNzMVV6OHdXaEd3Zw==
```

```
email = cheng.cui@ecs.co.uk
```

```
always-auth = true
```

If you are working with scoped packages, while using basic authentication, you also need to paste the following into the *~/.npmrc* file (in Windows %USERPROFILE%/*.npmrc*):

```
@<SCOPE>:registry=https://sb97digital.jfrog.io/artifactory/api/npm/npm/
```

```
//sb97digital.jfrog.io/artifactory/api/npm/npm/:_password=QVA4WncxaERqR3lHcUVhQ3MxVXo4d1doR3dn
```

```
//sb97digital.jfrog.io/artifactory/api/npm/npm/:username=cheng.cui
```

```
//sb97digital.jfrog.io/artifactory/api/npm/npm/:email=cheng.cui@ecs.co.uk
```

```
//sb97digital.jfrog.io/artifactory/api/npm/npm/:always-auth=true
```

#### QuickStart

https://www.jfrog.com/confluence/display/JFROG/QuickStart+Guide%3A+npm



### 开发流程



### 20220203



- #### DTMF

  - 网络双音多频(Dual Tone Multi-Frequency)；
  - When a caller uses the keypad on a telephone to move through the menu system, it is called DTMF input.



### 概念设计

https://docs.aws.amazon.com/connect/latest/adminguide/tutorial1-create-contact-flow.html

```
1.简介
本低级设计文件（LLDD）所包含的信息集中在Amazon Connect联络流程、FIS CodeConnect API和AWS服务，这些都是通过Amazon Connect电话系统管理客户账户所需的。

这套文件提供了解决方案的全貌，其中包括。
-FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf Document - 该文件描述了管理客户账户的电话流程。该文件包含了Amazon Connect联系流程建立/设计的主要信息来源。
-HLD - Telephony - Amazon Connect Contact Centre v1.1.docx - 该文件提供了Amazon Connect解决方案的操作要求和特点的高级概述。
-FIS-2154 CC_SBAPI_Reference_Guide_1.1.0 v.10.docx - FIS CodeConnect API规范文件，描述了在ID&V和自助服务阶段将利用的几个API。
-TouchPoint到Amazon Connect LLD -代理可能需要手动验证客户。当这样做时，代理人输入Touchpoint的信息被发送到亚马逊网络服务（AWS）并提供给亚马逊连接，允许联系流程验证和管理客户的账户。   
-IVR接口规范v1.0.xlsx -客户旅程报告规范 


该设计详细说明了客户希望在储蓄IVR中管理其账户的过程。  这个IVR包含一个两步的过程。第一个步骤是验证客户的身份，如果成功的话，第二个步骤是为他们提供一个自助服务菜单。
-客户拨打分配给或重定向给Amazon Connect解决方案的电话号码。
-储蓄IVR联系流程被调用，并使用DTMF提示呼叫者（Amazon Polly）他们的分类代码和账户号码。 该DTMF使用SBAFS提供的证书进行加密。
-亚马逊Lambda函数利用分类代码和账户号码，在请求中向FIS CodeConnect API发送这两个信息，如果能找到客户，API会做出回应。
-根据FIS的回应，客户可能会被提示使用DTMF输入其出生日期。
-一旦FIS找到了账户信息，联系流程会提示客户从他们的6位PSN/PIN中随机抽取3位数字。
-这些数字被发送到FIS CodeConnect API进行验证，然后返回ID&V状态。 
-客户信息，包括ID&V级别被更新到'sb-telephony-touchpoint-table'中，以便在来电者被转接到座席时用于弹屏。
-然后，IDV就会完成。
完成IDV后，客户可以管理他们的账户余额、交易或付款。
-在IDV之后，FIS CodeConnect被联系流程要求带回客户的所有活动账户的详细信息。
-然后将余额和提款信息回放给客户。
-之后，自助服务主菜单会呈现给客户。

根据客户希望在IVR内完成的任务，即管理其他账户、付款或转账，联系流程会提示客户提供信息，而Lambda函数会调用FIS CodeConnect API以获得响应。

上述步骤被认为是 "快乐路径"。错误处理将贯穿始终，以重新提示客户或在需要时将客户转给代理。

为了使FIS平台保持更新，如FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf文件中所示，联络流程中的某些点必须向FIS CodeConnect API发送关于客户进展的事件通知。事件类型的例子是记录成功/不成功的更新尝试。注意：事件列表与1.2节中的要求目录。
```

![image-20220212145146052](TODO.assets/image-20220212145146052.png)

```
2.1.组件
该解决方案利用了以下亚马逊网络服务（AWS）应用程序。
-Amazon Connect:  电话平台引导客户完成自助服务过程，提供提示，并通过DTMF收集信息。它与AWS Lambda互动，访问其他AWS服务。 

-AWS Lambda。一个事件驱动的无服务器进程，它将被Amazon Connect调用，以执行某些任务来驱动储蓄自助服务流程，其中包括
o验证DTMF输入
o与FIS CodeConnect API进行互动
o获取DynamoDB中的客户敏感信息

-Amazon Polly。一个由Amazon Connect使用的服务，将文本转换为口语化的音频来播放客户的提示。 在联系流程中定义的提示将被设置为使用SSML标签来控制发音和音调。

-亚马逊DynamoDB：一个NoSQL数据库，用于存储客户的敏感会话信息，包括他们的账户信息和客户号码。敏感数据不会被存储在Amazon Connect本身，只要在联系流程中需要，就会通过AWS Lambda提出请求，以获取信息。

-AWS系统管理器参数存储。这是一个配置数据的安全位置，对于这个解决方案，它将持有一个用于解密DTMF输入的私钥（证书）。 这可以防止捕捉到任何DTMF输入的明文。这个证书必须由Sainsbury's Bank提供和维护。

-FIS CodeConnect API。一个与自助IVR和客户后端系统互动的网关服务。该解决方案的主要功能是检索和处理来自联络流的API请求（通过Lambda），并在客户管理其账户时更新客户的详细信息。
```



```
4.Amazon Connect联络流程
亚马逊的最佳实践要求联络流程保持在一个可管理的规模内。由于储蓄IVR联络流逻辑相当大，多个联络流将处理自助服务旅程
-SBAF_Voice_Initial -这是进入Amazon Connect解决方案的入口点。这是一个现有的联络流程，其目的是收集动态配置并将呼叫转移到SB_Self-Service_IDV联络流程。这个联络流已经退出了。
-SB_Self-Service_IDV -这是进入储蓄IVR的入口。 它的类型是 "入站联系流程"，并将设置呼叫属性、录音、记录和自助服务的欢迎信息，然后将呼叫转移到执行ID&V的联系流程模块。完成后，呼叫被转移到SB_Self-Service_Menu联络流程。
-SB_Self-Service_Menu -该联络流程遵循完成ID&V后管理账户的逻辑 - FIS-18.1-185 - CS Sand Savings IVR呼叫流程。它的类型是 "呼入联系流程"。
```

```
4.1.提示
储蓄IVR旅程中的所有客户提示和信息将被编码到联系流程中。 要改变这些提示，需要适当的权限，通过Amazon Connect安全配置文件，以更新联络流程。 所有提示将使用SSML标签来控制发音和音调。
例外的是第4.13节中描述的可配置的欢迎信息。用户将需要访问动态配置DynamoDB。 
```



```
https://docs.aws.amazon.com/connect/latest/adminguide/encrypt-data.html

注意：在同一时间最多可以有两个加密密钥，以方便轮换。

每当 "存储客户输入 "区块被选中时，数字被按下前的超时时间是可配置的，设置为10秒。一旦呼叫者开始输入数字，数字间的超时被设置为5秒。(这是不可以配置的）。所收集的最大数字取决于所要求的信息，例如，账户号码将是8位数字。
4.7.与Lambda函数的互动
联系流程将调用一个Lambda函数来执行不同的请求。联系流程将传入一个 "方法参数"，允许Lambda函数只运行与要求的 "方法 "相匹配的代码。 一个方法参数的例子是验证一个客户或询问FIS CodeConnect API的信息。
为了确保Lambda函数不会从 "冷 "开始，并增加启动/响应时间，来自联系流程的请求将调用并 "预热 "该函数，使其在被要求处理任何传递给它的 "方法 "之前加载。 这将在提示呼叫者信息之前在联系流程的开始阶段完成。
```



```
4.8.与FIS CodeConnect API的交互作用
联系流程和FIS CodeConnect API之间没有直接连接。当与FIS CodeConnect API接触时，数据流将从Amazon Connect开始，传入所需的参数并调用一个Lambda函数。  Lambda函数将打包请求并将其发送到FIS CodeConnect API。

联系流程将等待Lambda函数提供响应的最大允许时间（8秒）。如果超过了8秒，呼叫者就会离开错误端口。 

Lambda函数将等待FIS CodeConnect API提供的最大8秒的响应。如果超过8秒，Lambda和FIS CodeConnect API之间的互动就被认为完成了。Lambda函数将一个不成功的结果发送至联系流程，联系流程将控制客户的呼叫。  
```

```
The mandatory options within the DynamoDB Table required for the self-service Contact Flow: 
自助服务联系流程所需的DynamoDB表内的强制选项。
pk = The Amazon Connect DDI assigned to Self-Service
Flag_DeliveryId_SavingsWelcomeMessage = play or skip – New option for Savings IVR
Destination_DeliveryId_Value = SB_Self-Service_IDV Contact Flow ARN
Destination_DeliveryId_Type = contactflow
```

![image-20220203101532832](TODO.assets/image-20220203101532832.png)



```
4.20.IDV收集PSN
在客户成功地输入了他们的账户信息，并且FIS CodeConnect返回它是一个有效的客户后，客户被要求从他们的6位PSN中随机输入3位数字。然后，联系流程将播放适当的提示（例如，请输入密码的n位数），并对产生的DTMF进行加密。 

在提示客户之前，联络流程需要知道要询问6位数字中的哪些数字。这是由下面的Lambda函数提供的。

Lambda函数: sb-telephony-savings-config-function
等待：8秒
方法：getPSN

Lambda响应：提供3位PSN数字以提示客户，并提供一个结果信息
结果 = 
-成功（能够检索到数据）。
-不成功（无法检索到数据）。
firstDigit = (1-6之间的整数，代表要提示的第一个数字) 
secondDigit = (1到6之间的整数，代表要提示的第二个数字)
thirdDigit = (1到6之间的整数，代表要提示的第三位数)

Lambda的firstDigit,secondDigit和thirdDigit的返回值被分配给Contact Attributes，以便在以后的过程中使用。注意：这不是敏感数据，因为它只是指要收集哪个（第一，第二或第三）数字，而不是客户PSN的实际数字。

联系流程提示的PSN数字必须被配置为最大数字数为1，任何客户按下的数字超过最大数字将不包括在验证中。按键前的最大等待时间是10秒。有效的输入是DTMF数字0-9。SSML标签用于格式化提示，以包括所要求的数字（例如，<speak>请输入<say-as interpret-as="ordinal">$.Attributes.firstDigit</say-as>你的密码的数字<speak>)

数字收集后，产生的DTMF必须保留在'sb-telephony-savings-ivr-table'DynamoDB中，以便以后向FIS CodeConnect发出API请求时可以引用。每次按键后都会调用一个Lambda函数来存储细节。

Lambda函数: sb-telephony-savings-config-function
等待：8秒
方法: writePSN
数据。存储客户输入的信息（客户输入的内容）。
storeDigit: firstDigit, secondDigit or thirdDigit Contact Attribute (指示器给Lambda，如果这是Contact Flow要求的第一、第二或第三组数字)

Lambda响应：如果数字能够被写入DynamoDB表，则提供一个 "结果 "消息。
结果 = 
-成功（数据保存到DynamoDB）。
-不成功（无法保存数据）

在客户按下一个无效的键（*,#）时，或Lambda函数返回result = unsuccessful时，一个名为failCounter的联系属性将递增。 如果这个联系属性达到重试/失败的极限（如下面本章末尾的文件参考所示），客户将被放入一个队列中。

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Enter PSN 1, Enter PSN 2 and Enter PSN3
4.21.IDV验证PSN
当3位数的PSN输入被收集后，它们必须被FIS CodeConnect验证。 联系流程将提供一个信息消息'请稍等，我正在查找您的账户信息'。 在调用Lambda函数检查凭证之前。

Lambda函数: sb-telephony-savings-config-function
等待：8秒
方法：validatePSN

Lambda响应：验证客户并返回一个结果信息。
结果 = 
-validated (客户已认证，IDV完成) 
-未验证（输入的PSN号码不正确-未从FIS返回验证）。
-未找到（账户在IVR中无法服务）
-重复（最后4位数字）。
-closed (账户已关闭)。
-封锁(账户被暂停或被封锁或有限制)
idvFailedCounterFIS =
-0-2 (呼叫者尝试认证的次数，从FIS检索) 

如果Lambda返回（notValidated），Lambda返回的第二个参数（idvFailedCounterFIS）必须包含客户尝试过的次数。这个值是由FIS CodeConnect在Lambda请求失败账户登录事件后提供的。

如果Lambda返回（未找到、重复、关闭或封锁），客户将被转出IVR并被放入一个队列中。

如果Lambda返回（已验证），客户继续下一步，用于ID&V的账户的余额和提款信息将以音频形式呈现给呼叫者。 

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Validate PSN, Balance
4.22.IDV结果
IDV完成后，结果必须写回'sb-telephony-touchpoint-table'DynamoDB表，以便在客户被转给代理时，信息能在CCP上显示。添加到该表的细节可以在第4.10节中找到。 联系流程将在客户成功认证后，在客户退出IVR并被发送到队列之前触发这个事件。




Lambda函数: sb-telephony-savings-config-function
等待：8秒
方法：idvResultUpdate
数据：idvLevel：2或3（取决于他们退出流程的位置）

Lambda响应：提供一个结果信息
结果= 
-成功（数据写入DynamoDB）。
-不成功（数据未写入）。

如果Lambda函数返回不成功或系统错误，调用将继续到流程的下一个阶段。 不写这个数据的影响是，如果客户在自助服务菜单时转出给代理，则没有屏幕弹出。

```



### 1461

```
Code - Savings IDV PSN
```



### 1541

```
code-WRITE PSN
```



### 1542

```
code-VALIDATE PSN
```



### 1467

Enter Date of Birth

```
4.17.IDV 验证贷款分类代码
联系属性LoansAccount = true上的分支块，将把呼叫者转移到一个队列中。任何其他值或属性没有配置（即不匹配），流程将继续到下一步并开始验证客户。 

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Loan Account Check. 
4.18.IDV 验证客户
一旦解决方案有了客户的账号、分类代码，可能还有他们的出生日期存储在'sb-telephony-savings-ivr-table'DynamoDB表中（第0节），这些信息就会被用来通过FIS CodeConnect识别客户。 
联系流程将提供一个信息消息'请稍等，我正在查找您的账户信息'。 在调用Lambda函数检查账户和分类代码并向FIS CodeConnect发出必要的API请求之前。 有几个可能返回的响应，联系流程预计会处理。 

Lambda函数: sb-telephony-savings-config-function
等待：8秒
方法: validateCustomer
data:withAccount or withDateofBirth (通知Lambda，如果DoB应该被视为FIS API的一个参数)
Lambda响应。向FIS CodeConnect发出请求，分析API响应，并将结果呈现给Contact Flow。
结果 = 
-getDoB (要求客户输入他们的出生日期，例如，FIS返回的联合账户--获得DoB)。
-找到客户（账户是有效的，没有被封锁/暂停或有太多的认证尝试 - 获得PSN)
-multipleCustomer (账户有效，但发现一个以上的客户 - 发送到队列中)。
-notfoundCustomer (账户无效，没有发现客户--再次收集分类代码/账户)
-notFoundTelephonyCredentials (账户有效，但没有找到电话证书 - 发送到队列)
idvFailedCounterFIS =
-0-2 (如果客户账户已被找到并有太多的验证尝试，FIS会返回 - 发送到队列中)。

如果FIS要求客户在尝试再次验证前必须输入他们的出生日期（DoB）（result=getDoB），这必须在联系流程中收集。如何采集DoB的过程将在第4.19节中解释。 

如果客户被找到（result=foundCustomer），联系流程会检查Lambda返回的idvFailedCounterFIS是否等于2。如果是，呼叫者就被送到一个队列中。 否则，客户被要求提供他们的PSN详细信息。第4.20节 .  

为了跟踪客户未被找到（结果=notfoundCustomer），然后被要求重新输入他们的分类代码/账号的次数，一个名为customerValidationFailCounter的联系属性将在任何退订的情况下递增。 如果这个联系属性达到重试的限制（如下面的文件所示），客户将被放入一个队列中。此外，需要第二个联系属性来跟踪客户被要求提供他们的出生日期的次数。这是用本模块中的联系属性dobFailCounter来追踪的。

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, 验证客户。 使用www.DeepL.com/Translator翻译（免费版）

4.19.IDV 验证出生日期
如果一个客户有多个/联合账户，联系流程必须提示呼叫者他们的出生日期（DoB）。DoB由客户使用DTMF输入 "ddmmyy"，并且不超过6位数，例如，1961年3月5日，你会输入050361。

验证是通过Amazon Lambda完成的，它将解密DTMF并验证所收集的数据是一个有效的日期，然后再将结果传回给联系流程。 出生日期被存储在'sb-telephony-savings-ivr-table'DynamoDB表中（第0节），以便在以后的过程中向FIS CodeConnect发送信息时使用。

在提示出生日期时收集的最大数字必须配置为提示中要求的最大数量（6），客户按的任何数字超过最大数字将不包括在验证中。按键前的最大等待计时器为10秒。数字间超时被设置为5秒。

Lambda函数: sb-telephony-savings-config-function
等待：8秒
方法：写DOB
数据。存储的客户输入

Lambda响应。验证这是一个正确的日期，并且数据已经被写入DynamoDB表。
结果 = 
-成功（有效日期和数据写入DynamoDB）。
-不成功（无效的日期格式）。

如果DoB被验证（成功），那么调用者将被放回验证客户模块（第4.18节），这样FIS CodeConnect就可以再次尝试寻找客户。

为了跟踪客户在此模块中被要求重新输入出生日期的次数，一个名为 failCounter 的联系属性将在任何退休的情况下递增。 如果这个联系属性达到重试的限制（如下面的文件所示），客户将被放入一个队列中。

```



### 1492

Web set PIN 1


以Lambda代码的形式提供功能，以验证从联系流程中传入的加密DTMF。

验收标准
情况1:
能够从联系流程中解密DTMF
情况2。
根据以下内容检查初始数字

- 字段不能为空
- 必须是6个字符的长度
- 数字字段不能为空（只有数字）
- 不能包含空格或标点符号.// validator.isAlphanumeric
- 在序列中至少使用三个不同的数字
- 升序或降序的连续数字不超过三个
- 同一数字连续出现的次数不能超过两次

情况3:

- 验证第一组数字是否与第二组数字相符



### 1498

Web Set PIN 2

以Lambda代码的形式提供功能，向FIS CodeConnect发出API请求，以重设Web PIN。



### 1571

Contact History Update to FIS



### 1508

Setup code connect

说明
FIS的API调用预计将在code-connect库中被代理，而不是直接从Lambda函数中调用。

https://bitbucket.org/sb97digitalengineering/sb-codeconnect-client/src/develop/

```
As a developer, I wish to know

1. how to develop a new endpoint in code-connect library
2. how to deploy to JFrog
3. how to import and use the library in a Lambda function.

So we can meet the requirement of SB.
```

验收标准
作为一个开发者，我希望知道

1. 如何在 code-connect 库中开发一个新的端点
2. 如何部署到 JFrog 上
3. 如何在 Lambda 函数中导入和使用该库。

因此，我们可以满足SB的要求。

````
# sb-codeconnect-client

围绕FIS Code Connect API的界面。为所有与API交互的端点提供摘要功能

## 入门

#### 安装依赖项

```bash
npm安装
```

#### 建立项目

``bash
npm run build
```

## 设计模式

客户端遵循**Facade**设计模式，为消费者提供一个简化的界面。这种模式被用来抽象出底层逻辑，包括复杂类型的映射，调用所需的第三方系统API和额外的辅助/实用程序功能。关于如何在typescript中使用**Facade**设计模式的更多信息可以在这里找到 - [facade模式最佳实践] 。

#### 修复依赖关系

当依赖关系没有固定的漏洞版本时，你可以在`package.json`的`resolutions`部分指定最小的软件包依赖关系是什么。使用时请注意

``bash
npm run dependencies:fix
```

#### 设置本地环境变量

1. 在项目的根目录下创建一个`.env`。
2. 在`.env`中添加以下变量。

   ```
   API_URL=https://sg352289vb.execute-api.eu-west-1.amazonaws.com/codeconnect/sbapi/v1.0
   TOKEN_URL=00
   CLIENT_ID=*****
   CLIENT_SECRET*****
   ```

3. 要获得 "CLIENT_ID "和 "CLIENT_SECRET "值，请向SLOT服务团队的成员询问。

## 客户端定义

这个客户端的方法、响应和错误都在[客户端定义]文档中定义。

## 资源命名

任何以 "Internal "为前缀的枚举、类型和接口，例如 "InternalAppStatusCode "都是对第三方服务的定义。当名称不以 "Internal "为前缀时，它们通常是面向公众的，并通过客户端公开。

## 一般备注

- 单元测试：使用jest.io模拟模块和功能
- 集成测试。**不**模拟模块和功能。快乐的路径调用外部依赖以获得预期的结果，任何失败的情况都要使用模拟的API服务器。
- 完成的定义：确保满足[完成的定义]的要求。
- 保持文档的更新

[客户端定义]：./docs/CLIENT_DEFINITION.md
[完成的定义]：https://sb97digital.atlassian.net/wiki/spaces/DE/pages/1507098710/Definition+of+Done+DES
[门面模式最佳实践]: https://refactoring.guru/design-patterns/facade

````





### 1573

```
Code - Contact History update Web PSN 2
```

```
这个序列是当Lambda函数向FIS CodeConnect发出API请求，在重置或注册他们的PSN后，用成功或不成功的信息更新客户历史。

Lambda函数将使用Sainsburys Bank库与FIS CodeConnect互动。这个库可以在以下Bitbucket资源库中找到-- https://bitbucket.org/sb97digitalengineering/sb-codeconnect-client/
```



### 1572

```
Code - Contact History Update Tel & Web PSN 2
```

1. 

### [TAC-1521](https://sb97digital.atlassian.net/browse/TAC-1521) 

Code- SAV IDV Internal Transfer

Write Code to allow customers to make a internal money transfer between accounts

LLD Ref: Section 4.27, 4.28

#### 4.27.	自助服务 - 内部汇款设置

联系流程提供了一个DTMF菜单（未加密的数字捕捉），以允许客户将钱从一个Sainsbury账户转到另一个。

在进行转账之前，会对活动账户进行验证检查。
- 允许转账 - 活跃账户可以继续进行转账
- 允许转账并有额外的提示--联系流程播放产品的具体信息和IVR菜单
- 不允许转账 - 转出到代理处
当要求账户转账时，可能会返回多个账户。这些信息将以5个一组的形式回放给客户，并启用1-5个DTMF菜单输入。 

联系流程也需要知道账户的总数以及播放完前5个账户后的任何剩余账户。这个值必须从Lambda函数中传出，以允许在联络流程中播放正确的菜单。

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Transfer Menu, Internal Account Transfer, Internal Transfer

#### 4.28.	自助服务 - 内部汇款验证

联系流程将提示客户收集要转账的英镑数量。一个商店的客户输入块将有一个终止键设置为#，客户必须按#来完成DTMF。如果他们已经完成了数字的输入，但没有按#，就会有5秒的延迟，并且会使用选择的剩余数字。最大的数字将被设置为8。

在选择了英镑的数量后，另一个商店客户输入块提示便士的数量。如果顾客在输入数字后没有按#键，在继续操作前会有5秒钟的延迟。 

收集英镑和便士的DTMF提示将不会被加密。

一旦收集了两组数字，有3个验证步骤。
- 第一个验证步骤是确保输入的便士在0-99之间。
- 第二个验证步骤是确保总转账金额（英镑+便士）大于零
- 第三个验证是检查全部转账金额（英镑+便士）是否低于IVR限额。 
如果上述任何一项验证失败，客户会被提示在IVR中选择一个选项来继续。 

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Transfer Amount, Transfer Channel Limit

呼叫流程回放一条信息，确认转账金额以及发送和接收账户。只播放账户号码的最后4位数字，而不是完整的账户细节。

在向Lambda提出更新FIS CodeConnect以进行转账的请求之前，一个获取客户输入块会提示客户确认转账细节。 如果转账成功，客户将被送回转账菜单。 

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Validate Transfer, Transfer Menu



### [TAC-1524](https://sb97digital.atlassian.net/browse/TAC-1524)

Validate if the payment is allowed by product type

Write code to allow customers to make a payment to another account

LLD Ref: Section 4.29 to 4.33

 

The Contact Flow must call a Lambda function to determine which is the product ID and process the result. 

Lambda Function: sb-telephony-savings-config-function 

Wait: 8 sec 

method: allowTransferOutPayment 

data: ContactID 

 

Lambda Response: 

- notAllowed (The account product ID is not allowed to make payments) 
- allowedWithMessage (The account product ID is allowed to make payments, but needs a ‘warning’ message) 

- allowed (The account product ID is allowed to make payments) 

#### 4.29.	自助服务 - 付款

联系流程在自助服务主菜单中提供了一个单一的菜单DTMF（未加密的数字捕捉），以允许客户向其预先授权的收款人之一进行付款。 

一旦选择，最初的步骤是验证所选/活动账户的产品类型是否允许进行支付或是否需要确认信息。  产品类型的值在/accounts API响应字段'productIdent'内。 下表显示了哪种产品被允许或不允许。

表9：产品标识配置
产品识别码 进行支付 警告信息
简易储蓄账户 3100 Y	
额外储蓄账户 3101 Y	
储备账户 3102 Y	
在线储蓄账户 3103 Y	
电子服务器特别账户 3104 Y	
网络节余账户 3105 Y	
互联网节余账户 3106 Y	
即时访问节余者账户 3107 Y	
高级储蓄账户 3108 Y	
直接储蓄账户 3109 Y	
日常账户 3110 Y	
现金ISA可变账户 3111 W 只是想让你知道，如果你从ISA储蓄账户中提取这些资金，并且超过了ISA的存款限额，根据ISA账户的条款，你可能无法将这笔钱贷回来。
现金ISA固定账户3112 N	
6个月固定利率储蓄账户 3200 N	
一年期固定利率储蓄账户 3201 N	
两年期固定利率储蓄账户 3202 N	
三年期固定利率储蓄账户 3203 N	
四年期固定利率储蓄账户 3204 N	
五年期固定利率储蓄账户 3205 N	

联系流程必须调用一个Lambda函数来确定哪个是产品ID并处理结果。
Lambda函数: sb-telephony-savings-config-function
等待：8秒

##### 方法: allowTransferOutPayment

数据。ContactID

Lambda响应。
- notAllowed (该账户产品ID不允许进行支付)
- allowedWithMessage (该账户产品ID被允许付款，但需要一个'警告'信息)
- 允许 (该账户产品ID被允许付款)

分支机构将把呼叫者送到代理处（notAllowed），进入收款人菜单（allowed）或在调用DTMF IVR菜单前播放警告信息。

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Make a Payment 

在播放完警告信息后，需要有一个单数IVR菜单。如果客户按下星号键（*），他们将被转回转接IVR菜单。 对于无效的键或超时，在客户被放入队列之前，只需在菜单上退2次，就可以了。

#### 4.30.	自助服务 - 付款人

如果账户允许付款，客户会看到一个预先定义的收款人列表。 如果没有设置，客户在被转回 "转账IVR菜单 "之前，将被播放一条信息。

客户会看到每个收款人的单数IVR菜单，每次最多可以有5个。

 

Lambda功能: sb-telephony-savings-config-function
等待：8秒

##### 方法: getPayee

rowIndex。<数字> (0=账户1到5，2=账户6到10，3=账户11到15)

Lambda响应：提供账户的详细信息。
- promptx(选择收款人时要播放的提示)
- payeeRemaining(仍可用于选择的受款人数量 - 如果大于0则播放额外的信息)
- totalPayees(客户总共有多少个收款人)
将需要SSML来向客户正确宣读收款人信息，获取客户输入块将必须设置为SSML，并在提示框中引用Lambda属性$.External.prompt1
$.External.payeeRemaining的值用于确定是否要包括'或听到额外的付款指示只需按9.'信息。

一旦收集了选项，受款人信息必须被写回DynamoDB表，以便在以后的过程中使用。这将在收集DTMF后通过一个Lambda函数完成。

Lambda函数: sb-telephony-savings-config-function
等待：8秒

##### 方法: setPayee

数据: rowIndex, 存储的客户输入(客户选择的账户)

Lambda响应：用收款人信息更新DynamoDB表。
- 成功
- 不成功

rowIndex值在联系流程中作为一个属性管理，是客户选择'9'来听取更多账户的连续次数。如果呼叫者按下'9'以听到更多的收款人，该值就会增加1。

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Payment Payees, Select Payee




#### 4.31.	自助服务 - 支付方式（银行向导）

联系流程必须通过使用FIS CodeConnect BankWizard API检查是否可以在IVR中进行支付。这是用一个Lambada函数来检查细节。

Lambda函数: sb-telephony-savings-config-function
等待：8秒

##### 方法：BankWizard

Lambda 响应：提供账户的详细信息。
结果 =

- fasterPayment (允许在IVR中进行快速支付)
- 代理人（代理人必须进行支付）
- unsuccessful (在lambda执行过程中出错)

如果除了'fasterPayment'以外的任何东西从Lambda返回，联络流程必须将呼叫传递给代理。

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, 支付方式

#### 4.32.	自助服务 - 支付金额和渠道限制

对于快速支付，限制被定义为

- 当天付款的截止时间。17:15 (下午5点15分)
- 超过限额的金额是可以支付的最大金额（英镑）：10000.00
- 最低金额一便士

当 "快速付款截止时间 "超过下午5点15分时，联系流程必须向呼叫者播放额外的信息。 为了确定一天中的时间，在Amazon Connect中需要一个单一的开放时间（未分配给队列），并定义为'FasterPaymentsCutoff'，这样就可以使用'检查操作时间'块来检查Faster Payments服务是否在第二天，并播放正确的信息。开放时间被设置为周一至周日00:00至17:15，这是在快速支付的窗口内。在这些时间之外的任何事情都会被提示 "您的付款将在下一个工作日收到 "的信息。

当提示客户用英镑和便士付款时，必须根据以下规则检查允许的最大（10k）和最小（1p）金额。联系流程不会对DTMF进行加密，允许流程在进入下一步和验证付款之前使用分支块来配置数字是否符合标准。

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, Payment Amount, Payment Channel Limit

#### 4.33.	自助服务 - 验证付款

验证付款细节：账户名和金额必须使用SSML标签进行正确的发音。 还需要一个单数的IVR菜单来让客户确认正确的付款细节或取消付款。

为了进行支付，联系流程必须调用Lambda来建立对FIS CodeConnect的请求。

Lambda函数: sb-telephony-savings-config-function
等待：8秒

##### 方法: makePayment

Lambda响应：提供账户的详细信息。
结果 =
- 成功 (发送并接受付款指令)
- 不成功（尝试付款时出错）。

在付款尝试完成后，客户的资料必须根据结果进行更新。联系历史Lambda方法将被用来更新FIS。

Lambda函数: sb-telephony-savings-config-function
等待：5秒 

##### 方法: contactHistory 

代码。1000455或1000456 (参考8.4节)
主体。参考第8.4节的数值
注：数值请参考第8.4节

参考: FIS-18.1-185 - CS Sand Savings IVR Call Flow Design v3.5.pdf, 验证付款





## capgemni

https://design-patterns.service.justice.gov.uk/

https://design-system.service.gov.uk/

https://github.com/surevine/govuk-react-jsx

https://github.com/ministryofjustice/moj-frontend

https://govuk-react.github.io/govuk-react/



```
https://camlite.herokuapp.com/

login: camlite

password: camlite2022
```

```
gitlab login

cuicheng18@hotmail.com

Ruiku12345

https://gitlab.com/markDWP/camlite
```



```
npm run generate
npm run start:server
```

  

### 255

- 理想情况下，我们应该能够制作既能操作案例又能操作任务的组件。

```
import $ from 'jquery';

window.$ = $;
// Object.defineProperty(window, "$", {
//   value: $,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

```

```
import jQuery from '@types/jquery';

declare global {
  interface Window {
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
}

```

### 290



### 289

- [ ] Axios 
- [ ] useContext
- [ ] Uint test



## potato





## aegon



印度

dell 笔记本

```
cheng.cui@aegon.co.uk
Ruiku12345a@
```



## Ruiku



- [x] Ec2 部署
- [x] 群成员展示
- [x] 添加群成员
- [x] contact 展示
- [ ] zheng chat 展示更多
- [ ] pan 新消息置顶

### redux



1. Lesg
2. Vibepay 
3. Ecs 







## Invotra



```
cheng.cui@invotra.com

Ruiku12345a@

https://io1dev.atlassian.net/jira/software/c/projects/CT/issues/?jql=project%20%3D%20%22CT%22%20and%20status%20%3D%20%22Tech%20Review%22
```

```
username: admin
email: admin@malone.com
password: ZEH8wq0zgj9msBQC

username: Penny.Malone
email: penny.malone@turingmotors.com
password: o9iKswf94GoRP7TV
try those
```



```
{"ChallengeName":"PASSWORD_VERIFIER","ClientId":"u7phr6opfq7smfmvp2rqrp2m","ChallengeResponses":{"USERNAME":"Penny.Malone","PASSWORD_CLAIM_SECRET_BLOCK":"+Sr3R0x46sLuQDdj9H/8EV2mQxYVb6/1COCgWf9qB1cOvZ7YkhGmLERph/xS1qQlH7ZCwaYaIXaR0rAdDqoAhsqYqZevIG/i9s5do2jKpypN2UUF2OWq09VmbyJOEanCZiJWdfOcthjLfihMIh7xNwVlLK967bDcmBdSgQlAFL28hqZR+dJx0j0JThasMEu0JRYpM1wd8dTPjdOVm0dVcVZP/hQLmyCg9m0nHd1vaXHOCvcdKK8bow2kmyoXlm/jNguF5YnWW8fD5mHNI/cykB9wHD1icBoVvDIlRMjIAeJ9vDX8sEUc/Y2UG9BiWHO0UwKDMx2vM/IJbugoL3VeliwpAHApFgsQvsebMBViwRKdujwt/r3w9AYPGhpIORgwctpNkFOp2+W/qICJa9hsVIPG2KvWRcwYCSxAZC6xtKFwlUh++S3kZKrD6wBp3PXcxNWjEZww60hNJUTZv4goQY6lNldf3/iycGz6jFOGpnwJmliHBqgkN+prc3Fnl1U7anzuDwXsslQJDIxVicA0Tfw0lZk+/ztn6WGBnLA7fvpzzCbGVqf8bDM2bkisYKtTOqbnA/quLghFIHkwk/ncaJJ+nh+yMPN866IM70TIZ805/IovMvaml4c+Z4TpBosm1W+zF77aFfQCnBRVoSB95Qh7woUmDjW5ADIxZgmQ3oD1d53CPthtol5NMvs6Dl7aEuri25JMMj1Gta/EMWXK8WJFqMLSQg9NXUQA4uKVVTL3YvJN9r2HGtY0wSAibsZqdVzvq1qXWryG9ie0fzesWrFSivrTURVIjMI2yzXqOxzl5bfogYpzAZnXy/bkC+ZV/ekdVuy45GmDgkVsKWrBFGr4V/dM+J8+P9KyDb3PFGcknYfFJ0hfiigoY/qFBeVs19V7v8cVuir3hBr18jO9+6ccvUCCWnYlOpUb2NLQ06zlRIC98aHWQzahJCQZaq3lQYTYsKLap8us+yolMFqG8Jo/moaSMOMVwldYCX3cXdPBqGwhWrpsYkEeZssZtIMKzfwtuA5LuNd+sZSjJR8nD8/A3NpfjKW6+EovwaPLWSA+dTqs+sX3xIbTD0F7W0b4XRJGBq6GtJzVsYJtR4F6PVxzqxdNf6FDc62U3/Yu/KlanGbsolUvx079zR3LkID2pLfc48cJA5dGy8vZ44KMZsc0D6wCSn1h36W0KeTJ5YObR6VfpS6Cc51dMe+W4nR6Qf7J9hgRe0RQh7c7rBOUJxpPyDSQ6MlJd+CD2lWQg2iPrqG5BdzNglajC1q4aoNDYQSFrH7XbPVZ0+iUn3fazbFhhDlfdNlxXifnykhkJP7G7E4xLn1cc5lvQgWgaXq54QzuA9Lc0cAaPSASlWYjRFF89ZiAVHRBcKL6vzqkFM3KjNF8jpP7I51uOTpKM6VG6+Lfv6m9wCbICp7q0J5SbQCxWa8FbD5D4iZDZl4s9VvtAAHzCYhtSPkBK1FCo2VsH35gLxbYmsp58mcVPby9VdxOh8ViToQd2li4h1hOt+oY9iVFRIn9jnZqrHzMIGactrrNiBHa3YE7IHRFVc5f5ehw2nTG6cJvFizOypCv9cNdJeFJA6lN1rW06NZ97M8qhLoaKEdeLt+IS6e0E0/uXpkw4Ub/KsjpR05evzEr+lGwrkMpJuAWUb7i9JuNUvAYQ99iNtlk2rJyYmuaL3YMQmgj7XTHhZ3rtj9su32lBTCmhNy84l6bc57K4g==","TIMESTAMP":"Thu Mar 3 10:11:07 UTC 2022","PASSWORD_CLAIM_SIGNATURE":"zflT+c3/nLwmhCmPlBJ00FdfuMoHy2lAyuJa0HNYoYc="},"ClientMetadata":{}}
```



#### Backend



1. Kosmos
   1. Graphql
      1. DynamoDB → Gremlin
      2. AWS Neptune
      3. AWS Elasticsearch
      4. AWS EventBridge → Email
      5. New Relic → Log
   2. Terraform
      1. DynamoDB → Gremlin



#### Frontend



## Todo



1. ecs 加密 
2. 278 pan

030620300255

430382199610013557

15580203368
