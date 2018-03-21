import {createElement, Component, render} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ListView from 'rax-listview';
import InfoService from './services';
import styles from './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: []
    }
  }

  componentWillMount() {
    alert(window.location.href)
    InfoService.getInfoList()
      .then((data) => {
        this.setData({data})
      })
  }

  listItem = (item, index) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.data}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.app}>
        {/* <View style={styles.appHeader}>
          <Text style={styles.appBanner}>Welcome to Rax</Text>
        </View>
        <Text style={styles.appIntro}>
          To get started, edit src/App.js and save to reload.
        </Text> */}
        <ListView
          renderRow={this.listItem}
          dataSource={this.state.data}
        />
      </View>
    );
  }
}

export default App;
