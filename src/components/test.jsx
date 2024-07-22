function mergeInterval(intervals){
    if(intervals.length === 0) 
        return [];

    intervals.sort((a,b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i] ;
        const lastMerged  = merged[merged.length - 1];

        if(current[0] <= lastMerged[1]){
            lastMerged[1] = Math.max(lastMerged[1], current[1])
        }else{
            merged.push(current)
        }


        
    }
    return merged;
}