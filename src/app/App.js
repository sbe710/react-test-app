import React from "react";
import {View, Panel, PanelHeader, Group, List, Cell, Div, Button, Gallery, Avatar, Counter} from "@vkontakte/vkui";


function App() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>VK App</PanelHeader>
                <Group title="Запись">
                    <Div className="header">
                        <Cell
                            size="l"
                            description="Рен-ТВ"
                            before={<Avatar src="https://pp.userapi.com/SslEXxXXambnM5qNlF_WTh6S_Y0fVDlKiDvsiQ/fd0PgTJ9Xfk.jpg"/>}
                        >
                            Апостол Пётр
                        </Cell>
                        <Button className={"activeSubs"} level="commerce" size="l" after={<Counter>4</Counter>}>Активных подписок</Button>
                    </Div>

                    <Gallery
                        slideWidth="90%"
                        style={{ height: 150 }}
                        bullets="dark"
                    >
                        <div style={{ backgroundColor: 'var(--destructive)' }} />
                        <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                        <div style={{ backgroundColor: 'var(--accent)' }} />
                    </Gallery>
                    <Div className={"footer"}>
                        <Button level="commerce">Подписаться за 299&#8381;/месяц</Button>
                        <Button level="destructive">Пожаловаться</Button>
                    </Div>
                </Group>
            </Panel>
        </View>
    );
}

export default App;
