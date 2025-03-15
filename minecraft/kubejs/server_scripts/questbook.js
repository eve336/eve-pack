PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
        // Give qb to player
        event.player.give('ftbquests:book')
        // Add the stage
        event.player.stages.add('starting_items')
    }
})