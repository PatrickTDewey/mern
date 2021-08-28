function smallest( arr ) {
    let min = arr[0];
    for( let element of arr ) {
        if( element < min ) {
            min = element;
        }
    }
    return min;
}
smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45] );
