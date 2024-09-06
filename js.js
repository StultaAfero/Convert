const d = document;
function jun(){
    var tar = d.getElementById("Target");    
    var str = "you died";
    var tarStr = tar.value;
    console.log(tarStr);
    tarStr.toString().replace("礎であるので、　人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び","い");
}

function Convert(){
    var tar = d.getElementById("Target");    
    var str = "you died";
    var tarStr = tar.value;
    console.log(tarStr);
    tarStr = tarStr.toString().replace(new RegExp("礎であるので、　人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び","g"),"い");
    tarStr = tarStr.toString().replace(new RegExp("人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基","g"),"あ");
    
    //tarStr = tarStr.toString().replace("い","礎であるので、　人権の無視及び軽侮が、人類の良心を踏みにじった野蛮行為をもたらし、言論及び信仰の自由が受けられ、恐怖及び");
    document.getElementById('out').textContent = `結果: ${tarStr}`;
}
jun();




//functionnctio
//navigatorf
//debugger default this else history addEventListener XMLDocument history;
