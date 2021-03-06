function do_attack(args) {
	
    var interval=250;
	if(args && args.interval) interval=args.interval
	
	setInterval(function(){
        use_hp_or_mp();
        loot();
        
        if(!conf.agression_state || character.rip || is_moving(character)) return;
        
        var target=get_targeted_monster();
        if(!target)
        {
            target=get_nearest_monster({min_xp:100,max_att:120});
            if(target) change_target(target);
            else
            {
                set_message("No Monsters");
                return;
            }
        }
        
        if(!in_attack_range(target))
        {
            move(
                character.x+(target.x-character.x)/2,
                character.y+(target.y-character.y)/2
                );
        }
        else if(can_attack(target))
        {
            set_message("Attacking: " +colored_text({text:target.mtype, color:'red'}));
            attack(target);
        }
	}, interval);
	
}