function make_album (artist:string,title:string,tracks?:number) {
    
    const album: {artist:string,title:string, tracks?:number} = {
        artist : artist,
        title : title,
    }

    if(tracks !== undefined){
        album.tracks = tracks;
    
    }

    return album;
}

 const album_1=make_album('Artist_1','Album_1');
 console.log(album_1);


 const album_2=make_album('Artist_2','Album_2');
 console.log(album_2);

 const album_3=make_album('Artist_3','Album_3',30);
 console.log(album_3);