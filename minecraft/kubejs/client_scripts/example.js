// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {
    event.hide('ae2:facade')
    event.hide(global.nukeList)

    event.hide(/flowercrops:.*_dye/)
    event.hide(/flowercrops:.*_pigment/)

    event.hide(/^sophisticatedstorage:.*chest.*/)
    event.hide(/^sophisticatedstorage:.*barrel.*/)
    event.hide(/^sophisticatedstorage:.*shulker.*/)
})

JEIEvents.addItems(event =>{
event.add(Item.of('sophisticatedstorage:chest', '{woodType:"oak"}'))    
event.add('sophisticatedstorage:shulker_box')
event.add(Item.of('sophisticatedstorage:barrel', '{woodType:"oak"}'))

})

JEIEvents.hideFluids(event =>{

    global.fluidNukeList.forEach(element =>{
    event.hide(element)
    })
})

