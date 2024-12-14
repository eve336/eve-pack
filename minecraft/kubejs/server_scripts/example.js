// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

global.nukeList.forEach((item) => {
    // console.log(item)
    event.remove({ output: item })
})


})

ServerEvents.tags('item', event =>{
    global.nukeList.forEach((item) =>{
        event.removeAllTagsFrom(item)
    })
    event.removeAllTagsFrom(/flowercrops:.*_dye/)
    event.removeAllTagsFrom(/flowercrops:.*_pigment/)
})

ServerEvents.tags('fluid', event =>{

    global.fluidNukeList.forEach(element =>{
    event.removeAllTagsFrom(element)
})
})