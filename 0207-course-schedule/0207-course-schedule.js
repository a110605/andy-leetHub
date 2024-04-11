/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const preMap = buildPreMap(prerequisites)
    // console.log(preMap)
    const visited = {};
    const dfsVisitedPreMap = (node) =>{
        if(visited[node]) return false;
        if(preMap[node] !== undefined){
            if(preMap[node].length === 0){
                return true;
            }
            visited[node] = true;
            for (let val of preMap[node]){
                if(!dfsVisitedPreMap(val)) return false;
            }
            visited[node] = false
            preMap[node] = []
        }
        return true;
    }

    for(let key in preMap){
        if(!dfsVisitedPreMap(key)){
            return false
        }
    }
    return true;
};

const buildPreMap = (pre) => {
    const preMap = {}
    for(let i = 0; i < pre.length; i++){
        if(preMap[pre[i][0]] === undefined){
            preMap[pre[i][0]] = [pre[i][1]];
        } else {
            preMap[pre[i][0]].push(pre[i][1])
        }
    };
    return preMap;
}

