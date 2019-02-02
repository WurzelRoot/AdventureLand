function colored_text(args){
	if(args.color) {
        args.text="<span style='color: "+args.color+"'>"+args.text+"</span>"; 
    }
	return args.text;
}