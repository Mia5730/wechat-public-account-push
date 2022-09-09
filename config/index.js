export const config = {

  // APP_ID 
  // APP_ID: "wx482f0b53d0cdce08",

  // APP_SECRET 
  // APP_SECRET: "227ca3b1c6da37dbf383182d471d327a",

  /**
   * [
   *  {
   *    name: "小智",
   *    id: "oRj4v5uR5ImrOLrbvnxjJUOFOM2s",
   *    useTemplateId: "je1zJFjdLeEyS1zc0ODemuaZkXROnTS1U7de3dz7g7c",
   *    openUrl: "https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F%3Fcategory%3D99991"
   *   }, 
   * ]
   */
  USERS: [
    {
      name: "小智",
      id: "oRj4v5uR5ImrOLrbvnxjJUOFOM2s",
      useTemplateId: "je1zJFjdLeEyS1zc0ODemuaZkXROnTS1U7de3dz7g7c",
      province: "江苏",
      city: "南京",
      openUrl: "https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F%3Fcategory%3D99991"
    }, 
   


  CALLBACK_TEMPLATE_ID: "je1zJFjdLeEyS1zc0ODemuaZkXROnTS1U7de3dz7g7c",

  CALLBACK_USERS: [
    {
      name: "自己",
      id: "oRj4v5uR5ImrOLrbvnxjJUOFOM2s",
    }, 
  ],
    


  PROVINCE: "江苏",
  CITY: "南京",


  FESTIVALS: [
    {"type": "节日", "name": "恋爱纪念日", "year": "2022", "date": "07-10"},
  ],


  FESTIVALS_LIMIT: 0,


  CUSTOMIZED_DATE_LIST: [
    {"keyword": "love_day", date: "2022-07-10"}
  ],


  SLOT_LIST: [
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],


  LITERARY_PREFERENCE: ""


}
