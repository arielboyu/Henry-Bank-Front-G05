import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import PureChart from 'react-native-pure-chart';
import Svg from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { VictoryPie, VictoryAnimation, VictoryLabel, VictoryLegend } from 'victory';

import { getAllMovements } from '../src/redux/actions/account';

const WIDTH = 400;
const HEIGHT = 250;
const WIDTHRING = 250;
const HEIGHTRING = 400;

const StatisticsScreen = () => {
	const dispatch = useDispatch();
	/* const user = useSelector((state) => state.user); */
	const account = useSelector((state) => state.account);

	useEffect(() => {
		/* dispatch(getAllMovements(user.user.id.id)); */
		dispatch(getAllMovements(1));
	}, []);

	const [ data, setData ] = useState([ { x: 1, y: 5 }, { x: 2, y: 2 }, { x: 3, y: 3 } ]);

	const changeData = () => {
		const randomNum = Math.floor(Math.random() * 100) + 1;

		const y2 = Math.round(randomNum / 3);

		const y3 = 100 - randomNum - y2;

		setData([ { x: 1, y: randomNum }, { x: 2, y: y2 }, { x: 3, y: y3 }, { x: 4, y: y3 + 4 } ]);
	};

	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			<View
				style={{ height: HEIGHT, width: WIDTH, alignItems: 'center', backgroundColor: 'green', marginTop: 10 }}>
				<Svg>
					<VictoryPie
						animate={{ duration: 500 }}
						origin={{ x: WIDTH / 2, y: 160 }}
						data={data}
						height={WIDTHRING}
						width={HEIGHTRING}
						padAngle={2}
						innerRadius={WIDTHRING / 2 - 20}
						startAngle={130}
						endAngle={-130}
						colorScale={[ 'tomato', 'orange', 'gold', 'cyan', 'navy' ]}
						style={{ labels: { fill: 'white', fontSize: 0 } }}
					/>
					<VictoryAnimation dutation={1000} data={{ left: data[0].y }}>
						{(props) => {
							return (
								<React.Fragment>
									<VictoryLabel
										textAnchor="middle"
										verticalAnchor="middle"
										x={WIDTH / 2}
										y={WIDTHRING / 2 + 10}
										text="Saldo: "
										style={{ fontSize: 20 }}
									/>
									<VictoryLabel
										textAnchor="middle"
										verticalAnchor="middle"
										x={WIDTH / 2}
										y={WIDTHRING / 2 + 40}
										text={Math.round(props.left)}
										style={{ fontSize: 20 }}
									/>
								</React.Fragment>
							);
						}}
					</VictoryAnimation>
					<VictoryLegend
						title="Estadísticas"
						centerTitle
						orientation="horizontal"
						x={WIDTH / 4.5}
						gutter={20}
						style={{ border: { stroke: 'black' }, labels: { fontSize: 10 } }}
						colorScale={[ 'tomato', 'orange', 'gold', 'cyan', 'navy' ]}
						data={[ { name: 'Compra' }, { name: 'Transf' }, { name: 'Carga' }, { name: 'Pago' } ]}
					/>
				</Svg>
			</View>
			<View>
				<Button
					mode="outlined"
					style={{
						backgroundColor : '#006A34'
					}}
					color="white"
					onPress={changeData}>
					Cambiar
				</Button>
			</View>
		</View>
	);
};

export default StatisticsScreen;
