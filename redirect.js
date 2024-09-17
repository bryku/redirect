function redirect(redirects){
    for(let redirect in redirects){
        if(location.pathname.endsWith(redirect)){
            let url = location.pathname.slice(0, -redirect.length + 1);
						    url+= redirects[redirect] + location.search;
						location.href = url;
				}
    }
}
