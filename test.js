function ini (itu){
    if (itu <= 5){
        return 1
    } else {
        return ini(itu-1) + ini(itu-2)
    }
}

console.log(ini(7))