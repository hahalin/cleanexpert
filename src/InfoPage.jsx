import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

export default class InfoPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar() {
  	//<div className="left"><BackButton>Back</BackButton></div>
    return (
      <Toolbar>
        
        <div className="center">客戶資料</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.popPage.bind(this)}>返回</Button>
        </p>
        <section style={{textAlign: 'center'}}>
        	關於這個客戶的描述
        </section>
      </Page>
    );
  }
}