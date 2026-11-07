[["map-jhb",-26.2237,27.8585,"Johannesburg Lab"],["map-dbn",-29.9675,30.8829,"Durban Lab"]].forEach(function(m){var el=document.getElementById(m[0]);
if(typeof L==="undefined"){el.innerHTML='<p style="padding:1rem">Map unavailable. Use the directions button.</p>';return}
var map=L.map(m[0]).setView([m[1],m[2]],13);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(map);
L.marker([m[1],m[2]]).addTo(map).bindPopup("<b>"+m[3]+"</b>").openPopup()});
