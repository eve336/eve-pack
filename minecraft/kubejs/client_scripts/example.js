// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {
    event.hide('ae2:facade')
    event.hide(global.nukeList)

    event.hide(/flowercrops:.*_dye/)
    event.hide(/flowercrops:.*_pigment/)
})

JEIEvents.hideFluids(event =>{

    global.fluidNukeList.forEach(element =>{
    event.hide(element)
    })
})