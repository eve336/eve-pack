// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

    event.remove({input: /flowercrops:.*_dye/})
    event.remove({input: /flowercrops:.*_pigment/})

    event.remove({id: 'simple_resource_generators:simple_lava_condenser'})

global.nukeList.forEach((item) => {
    // console.log(item)
    event.remove({ output: item })
    event.remove({input: item})
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