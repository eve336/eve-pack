// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

JEIEvents.hideItems(event => {
    event.hide(global.nukeList)
    
})

JEIEvents.hideFluids(event =>{
    fluidNukeList.forEach(element => {
        event.hide(element)
    })
}
)