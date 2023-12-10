function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const queue = [];
    
    while (queue.length > 0 || truck_weights.length > 0) {
        time++;

        if (queue.length > 0 && time - queue[0].time === bridge_length) {
            weight += queue.shift().weight;
        }

        if (weight >= truck_weights[0]) {
            weight -= truck_weights[0];
            queue.push({ weight: truck_weights.shift(), time });
        }
    }

    return time;
}