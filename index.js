const params = {
    lines: [
        {
            background: '#CDCDCD',
            updateTime: 10,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 100,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 20,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                },
                {
                    background: '#00GGFF',
                    width: 15,
                },
                {
                    background: '#00GGFF',
                    width: 15,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 700,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#000000',
            updateTime: 900,
            elements: [
                {
                    background: '#000000',
                    width: 15,
                },
                {
                    background: '#CDCDCD',
                    width: 50,
                },
                {
                    background: '#00F',
                    width: 35,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 1500,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 700,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#000000',
            updateTime: 900,
            elements: [
                {
                    background: '#000000',
                    width: 15,
                },
                {
                    background: '#CDCDCD',
                    width: 50,
                },
                {
                    background: '#00F',
                    width: 35,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 200,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 700,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#000000',
            updateTime: 900,
            elements: [
                {
                    background: '#000000',
                    width: 15,
                },
                {
                    background: '#CDCDCD',
                    width: 50,
                },
                {
                    background: '#00F',
                    width: 35,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 1500,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 700,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#000000',
            updateTime: 900,
            elements: [
                {
                    background: '#000000',
                    width: 15,
                },
                {
                    background: '#CDCDCD',
                    width: 50,
                },
                {
                    background: '#00F',
                    width: 35,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 1500,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 700,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
        {
            background: '#000000',
            updateTime: 90,
            elements: [
                {
                    background: '#000000',
                    width: 5,
                },
                {
                    background: '#CDCDCD',
                    width: 50,
                },
                {
                    background: '#00F',
                    width: 45,
                }
            ]
        },
        {
            background: '#CDCDCD',
            updateTime: 500,
            elements: [
                {
                    background: '#0022F',
                    width: 25,
                },
                {
                    background: '#11001F',
                    width: 50,
                },
                {
                    background: '#00GGFF',
                    width: 25,
                }
            ]
        },
    ]
};

const getRandomColor = () => {
    var allowed = "ABCDEF0123456789", S = "#";
    while(S.length < 7){
        S += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return S;
 };

const root = document.getElementById('root');
const positionInfo = root.getBoundingClientRect();
const height = root.offsetHeight;
const width = root.offsetWidth;

const lineHeight = height/params.lines.length;

const createLine = (line) => {
    var mainLine = document.createElement('div');
    mainLine.style.width = '100%';
    mainLine.style.backgroundColor = line.background;
    mainLine.style.height = lineHeight+'px';
    root.appendChild(mainLine)
    line.elements.map(el=>createSubLine(mainLine, el, line.updateTime))
};

const createSubLine = (mainLine, subLine, time) => {
    var subLineEl = document.createElement('div');
    subLineEl.style.width = subLine.width+'%';
    subLineEl.style.backgroundColor = subLine.background;
    subLineEl.style.height = lineHeight+'px';
    subLineEl.style.display = 'inline-block';
    subLineEl.innerHTML = '<span>Инжирчик</span>'
    console.error( subLine)
    mainLine.appendChild(subLineEl);
    return changeColor(time, subLineEl)
    
}
const changeColor = (time, subLineEl) => {
    console.error('--',time);
    
    const timerId = setInterval(function() {
        subLineEl.style.backgroundColor = getRandomColor()
      }, time);
}


params.lines.map(line=>createLine(line));

