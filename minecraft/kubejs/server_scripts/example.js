// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

global.nukeList.forEach((item) => {
    // console.log(item)
    event.remove({ output: item })
})


})