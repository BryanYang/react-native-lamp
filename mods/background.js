

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Svg, {
  Path,
  Rect,
  G,
  Defs,
  Stop,
  RadialGradient,
  Polyline,
  ClipPath,
  Circle,
  Ellipse,
} from 'react-native-svg';

export default class Lamp extends React.Component {

  render(){
    return <Svg
    height="600"
    width="100%"
  >
  <G id="s-bulb">
	<G>
		<Path fill-rule="evenodd" clip-rule="evenodd" d={`M104.145,42.922c-0.258-9.541-3.436-19.458-10.576-27.913
      C88.695,9.245,82.706,5.05,75.47,2.746c-3.798-1.209-7.682-1.965-11.683-1.916c-3.553,0.043-7.022,0.693-10.406,1.747
			c-9.279,2.88-16.414,8.597-21.776,16.625C28.182,24.328,26.107,29.98,24.958,36c-0.742,3.904-1.014,7.844-0.657,11.804
			c0.858,9.513,4,18.144,10.17,25.542c2.009,2.413,4.117,4.748,5.545,7.566c1.062,2.094,1.989,4.256,2.942,6.4
			c1.076,2.427,2.774,4.205,5.371,4.859c1.925,0.485,3.702,1.281,5.499,2.063c2.902,1.265,5.809,2.526,8.709,3.795
			c2.195,0.955,4.388,1.918,6.581,2.884c2.589,1.138,5.17,2.287,7.762,3.413c1.31,0.57,2.841,0.235,3.577-0.708
			c1.095-1.397,0.673-3.48-1.087-4.271c-1.669-0.753-3.345-1.488-5.019-2.222c-2.038-0.891-4.08-1.776-6.12-2.666
			c-2.604-1.136-5.216-2.268-7.821-3.411c-2.003-0.878-4-1.771-6.005-2.644c-1.102-0.479-2.207-0.95-3.326-1.39
			c-0.417-0.161-0.891-0.179-1.308-0.344c-0.764-0.298-1.278-0.869-1.553-1.646c-1.768-4.971-4.392-9.464-7.759-13.508
			c-1.509-1.809-3.09-3.554-4.336-5.57c-3.335-5.383-5.46-11.171-6.052-17.516c-0.915-9.789,1.291-18.79,6.863-26.889
			c4.957-7.208,11.708-12.015,20.204-14.157c6.392-1.611,12.689-1.011,18.773,1.573c9.279,3.942,15.587,10.785,19.488,19.984
			c2.296,5.405,3.22,11.05,3.011,16.889c-0.317,8.925-3.272,16.896-8.946,23.792c-2.068,2.513-4.124,5.015-5.803,7.807
			c-1.402,2.332-2.552,4.787-3.472,7.349c-0.474,1.314-1.366,2.028-2.757,2.188c-0.928,0.106-1.761,0.435-2.275,1.309
			c-0.89,1.508-0.273,3.811,1.588,4.196c1.883,0.39,3.575-0.188,5.144-1.113c1.738-1.026,2.893-2.557,3.605-4.471
			c1.734-4.653,4.226-8.836,7.528-12.581c4.964-5.618,8.227-12.141,9.869-19.48C103.665,51.369,104.143,47.883,104.145,42.922z`}/>
		<Path fill-rule="evenodd" clip-rule="evenodd" d={`M77.257,116.188c0.884,0.346,1.702,0.202,2.46-0.188
			c0.947-0.494,1.366-1.401,1.348-2.405c-0.02-1.136-0.615-2.013-1.687-2.491c-1.944-0.869-3.899-1.721-5.848-2.575
			c-1.709-0.747-3.419-1.491-5.13-2.234c-2.676-1.171-5.354-2.338-8.028-3.509c-2.347-1.031-4.684-2.087-7.038-3.102
			c-0.792-0.343-1.614-0.626-2.435-0.891c-0.897-0.287-2.432,0.154-2.961,1.172c-0.715,1.37-0.362,3.355,1.264,4.016
			c2.498,1.021,4.943,2.155,7.415,3.23c2.935,1.281,5.875,2.56,8.81,3.84c2.003,0.878,3.997,1.774,6.002,2.646
			c0.324,0.139,0.452,0.309,0.4,0.68c-0.46,3.388-2.759,5.917-6.027,6.749c-3.471,0.886-7.294-1.126-8.787-4.443
			c-0.481-1.063-0.592-2.182-0.792-3.296c-0.254-1.407-1.227-2.001-2.529-2.222c-0.908-0.151-2.159,0.46-2.663,1.422
			c-0.438,0.83-0.415,1.74-0.272,2.663c0.696,4.489,2.935,7.963,6.953,10.109c3.115,1.666,6.446,2.109,9.915,1.108
			c5.003-1.449,8.154-4.682,9.476-9.707C77.146,116.592,77.19,116.428,77.257,116.188z`}/>
	</G>
</G> 
</Svg>  
  }
}

