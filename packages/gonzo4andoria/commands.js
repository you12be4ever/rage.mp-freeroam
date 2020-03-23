/**
 * File: commands.js
 * Note: Script commands definition explicite for developement of scripts. 
 */

 let _commands = {};
/// SECTION: COMMAND_DEF

/** AddCommand - /admin_aboutme
 *      no command param
 */
mp.events.addCommand('admin_aboutme', (player) => {
    let info_pos = player.position;
    player.outputChatBox('<b>Your ID:</b> ' & player.id.toString());
    player.outputChatBox('<b>Your Name:</b> ' & player.name); 
    player.outputChatBox('<b>Your Position:</b>: x:' & info_pos.x.toString() & ' y:' & info_pos.y.toString() & ' z:' & info_pos.z.toString());
    // TODO: Give more informaitons over player back. & Create "Command" white information over a ohter player.
});

/// COMMAND_DEF
