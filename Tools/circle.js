
let circle = (start, state, dispatch) => {

    // In following function we are not taking state as an argument because we don't want to crate multiple circles while dragging
    let draw_circle = pos => {
        let Radius = Math.sqrt(Math.pow(pos.x - start.x, 2) + Math.pow(pos.y - start.y, 2))
        let radius = Math.ceil(Radius)
        
        let drawn = []
        for(let dy = -radius; dy <= radius; ++dy){
            for(let dx = -radius; dx <= radius; ++dx){
                let dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))

                let threshold = (radius > 9 ? radius * 0.9 : radius * 0.7)
                
                if(dist > radius || dist < threshold) 
                    continue

                let x = start.x + dx
                let y = start.y + dy
                
                if(x < 0 || x >= state.picture.width || y < 0 || y >= state.picture.height)
                    continue
                
                drawn.push({x, y, color: state.color})

            }
        }

        dispatch({picture: state.picture.draw(drawn)})
    }

    draw_circle(start)
    return draw_circle
}

export {circle}