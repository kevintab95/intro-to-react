// Import React
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from '../assets/logo.svg';
import './app.css';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "black",
  secondary: "lightslategrey",
  tertiary: "#03A9FC",
  quarternary: "#CECECE",
  quinary: "#FFFFFF"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

class ActionButton extends React.Component {
	render() {
  	return <button className="action-button white" onClick={this.props.handleClick}><Text textSize={40} textColor="quinary">{this.props.text}</Text></button>
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	count: 0
    }
    this.subtractCount = this.subtractCount.bind(this);
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  subtractCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <Text textSize={80} className="outline-only">count is {this.state.count}</Text>
        <ActionButton text="-" handleClick={this.subtractCount}/>
        <ActionButton text="+" handleClick={this.addCount.bind(this)}/>
      </div>
    )
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Text size={6} textColor="secondary">an introduction to</Text>
            </Fill>
          </Layout>
          <Layout>
            <Fit className="logo"><img src={logo} className="App-logo" alt="logo"></img></Fit>
            <Fit className="react-fit-heading">
              <Heading className="react-heading" size={1} textColor="#61dafb">React</Heading>
            </Fit>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill className="left-align">
              <span>hello world in <span className="blue">react</span></span>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <pre class="code">
                <Appear order={1}><span>ReactDOM.render(<br/></span></Appear>
                <span>&nbsp;&nbsp;&lt;h1>Hello, world!&lt;/h1&gt;,<br/></span>
                <Appear order={2}><span>&nbsp;&nbsp;document.getElementById('root')<br/></span></Appear>
                <Appear order={1}><span>);<br/></span></Appear>
              </pre>
            </Fill>
          </Layout>
          <Layout>
            <Fill className="left-align">
              <Appear order={3}>
                <span>..but something doesn't seem right</span>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["none"]} bgColor="primary">
          <Layout>
            <Fill className="left-align">
              <span>hello world in <span className="blue">react</span></span>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <pre class="code">
                <span>ReactDOM.render(<br/></span>
                <span class="red">&nbsp;&nbsp;&lt;h1>Hello, world!&lt;/h1&gt;,<br/></span>
                <span>&nbsp;&nbsp;document.getElementById('root')<br/></span>
                <span>);<br/></span>
              </pre>
            </Fill>
          </Layout>
          <Layout>
            <Fill className="left-align">
              <Appear>
                <span>shouldn't this be in quotes?</span>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Text textColor="tertiary">Nope.</Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <pre class="code">
                <span>var element = &lt;h1>Hello, world!&lt;/h1&gt;;<br/></span>
              </pre>
            </Fill>
          </Layout>
          <Text size={6} textColor="secondary">This deceptive looking tag syntax is called <span className="blue">JSX</span></Text>
          <Appear>
            <Text size={6} textColor="secondary">It is a <span className="blue">JS</span> syntax extension</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary">We can use React without JSX</Heading>
          <Appear><Text size={6} textColor="secondary">but..</Text></Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <pre class="code">
                <span>var element = ( <br />
                  <Appear>
                    <div>&nbsp;&nbsp;&lt;h1 className="greeting">Hello, world!&lt;/h1&gt;; <br /></div>
                  </Appear>
                );</span><br />
                <br />
                <span>ReactDOM.render(<br/></span>
                <span>&nbsp;&nbsp;element,<br/></span>
                <span>&nbsp;&nbsp;document.getElementById('root')<br/></span>
                <span>);<br/></span>
              </pre>
            </Fill>
          </Layout>
          <Text size={6} textColor="secondary">rendering an element using JSX</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <pre class="code">
                <span>var element = React.createElement( <br />
                  <Appear>
                    <div>
                      &nbsp;&nbsp;'h1', <br />
                      &nbsp;&nbsp;&#123;className: 'greeting'&#125;, <br />
                      &nbsp;&nbsp;'Hello, world!' <br />
                    </div>
                  </Appear>
                );</span><br />
                <br />
                <span>ReactDOM.render(<br/></span>
                <span>&nbsp;&nbsp;element,<br/></span>
                <span>&nbsp;&nbsp;document.getElementById('root')<br/></span>
                <span>);<br/></span>
              </pre>
            </Fill>
          </Layout>
          <Text size={6} textColor="secondary">rendering an element without JSX</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <pre class="code">
                <span>var element = ( <br />
                  <div>&nbsp;&nbsp;&lt;h1 className="greeting">Hello, world!&lt;/h1&gt;; <br /></div>
                );</span><br />
              </pre>
            </Fill>
          </Layout>
          <Appear>
            <Text size={6} textColor="secondary">gets <span className="blue">compiled</span> to</Text>
          </Appear>
          <Layout>
            <Fill>
              <Appear>
                <div>
                  <pre class="code">
                    <span>var element = React.createElement( <br />
                      <div>
                        &nbsp;&nbsp;'h1', <br />
                        &nbsp;&nbsp;&#123;className: 'greeting'&#125;, <br />
                        &nbsp;&nbsp;'Hello, world!' <br />
                      </div>
                    );</span><br />
                  </pre>
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textColor="tertiary" className="left-align">Can embed expressions</Text>
          <Layout>
            <Fill>
              <pre class="code">
                <span>
                  var name = "Cersei Lannister"; <br />
                  var element = ( <br />
                  &nbsp;&nbsp;&lt;h1&gt;Hello, &#123; <Appear><span>name</span></Appear> &#125;!&lt;/h1&gt; <br />
                  ); <br />
                </span>
              </pre>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textColor="tertiary" className="left-align">Can embed expressions</Text>
          <Layout>
            <Fill>
              <pre class="code">
                <span>
                  var name = "Cersei Lannister"; <br />
                  var element = ( <br />
                  &nbsp;&nbsp;&lt;h1&gt;Hello, &#123; <Appear><span>name.toUpperCase()</span></Appear> &#125;!&lt;/h1&gt; <br />
                  ); <br />
                </span>
              </pre>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textColor="tertiary" className="left-align">..and specify children</Text>
          <Layout>
            <Fill>
              <pre class="code">
                <span>
                  var element = ( <br />
                  &nbsp;&nbsp;&lt;div&gt; <br />
                  <Appear>
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Wow!&lt;/h1&gt; <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;this is awesome!&lt;/h2&gt; <br />
                    </span>
                  </Appear>
                  &nbsp;&nbsp;&lt;/div&gt; <br />
                  ); <br />
                </span>
              </pre>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text className="left-align" textColor="tertiary">In index.html</Text>
          <Layout>
            <Fill>
              <pre class="code">
                <span>&lt;div id="root"&gt;&lt;/div&gt;</span>
              </pre>
            </Fill>
          </Layout>
          <br />
          <Text className="left-align" textColor="tertiary">In app.js</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <span>var element = ( <br />
                    <div>&nbsp;&nbsp;&lt;h1>Hello, world!&lt;/h1&gt;; <br /></div>
                  );</span><br />
                  <br />
                  <span>ReactDOM.render(<br/></span>
                  <span>&nbsp;&nbsp;element,<br/></span>
                  <span>&nbsp;&nbsp;document.getElementById('root')<br/></span>
                  <span>);<br/></span>
                </pre>
              </div>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text className="left-align" textColor="tertiary">In index.html</Text>
          <Layout>
            <Fill>
              <pre className="code">
                <span>&lt;div id="root"&gt;
                  <Appear>
                    <span>&lt;h1&gt;Hello, world!&lt;/h1&gt;</span>
                  </Appear>
                &lt;/div&gt;</span>
              </pre>
            </Fill>
          </Layout>
          <br />
          <Text className="left-align" textColor="tertiary">In app.js</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <span>var element = ( <br />
                    <div>&nbsp;&nbsp;&lt;h1>Hello, world!&lt;/h1&gt;; <br /></div>
                  );</span><br />
                  <br />
                  <span>ReactDOM.render(<br/></span>
                  <span>&nbsp;&nbsp;element,<br/></span>
                  <span>&nbsp;&nbsp;document.getElementById('root')<br/></span>
                  <span>);<br/></span>
                </pre>
              </div>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textSize={70}>
            <Link target="_blank" className="blue" href="http://jsfiddle.net/4td7qo6v/">rendering smartly</Link>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textSize={70}>
            <span className="blue">components and props</span>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">components are like functions</Heading>
          <br />
          <ul className="left-align">
            <Appear>
              <li>they take some input and give some output</li>
            </Appear>
            <Appear>
              <li>they are reusable</li>
            </Appear>
            <Appear>
              <li>bigger functions can be composed of smaller ones</li>
            </Appear>
          </ul>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textColor="tertiary">a component</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <span>var element = &lt;Welcome name="lakshmi" /&gt; <br /></span>
                  <br />
                  <span>ReactDOM.render(<br/></span>
                  <span>&nbsp;&nbsp;element,<br/></span>
                  <span>&nbsp;&nbsp;document.getElementById('root')<br/></span>
                  <span>);<br/></span>
                </pre>
              </div>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textColor="tertiary">definition of a component</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <span>function Welcome(props) &#123; <br />
                    <div>&nbsp;&nbsp;return &lt;h1&gt;Hello, &#123; props.name &#125;&lt;/h1&gt; <br /></div>
                  &#125;</span><br />
                </pre>
              </div>
            </Fill>
          </Layout>
          <Text textSize={30} className="left-align" textColor="tertiary">"props" (properties) is the input to the Component</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textColor="tertiary">an alternate definition</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <span>class Welcome extends React.Component &#123; <br />
                    &nbsp;&nbsp;render() &#123; <br />
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h1&gt;Hello, &#123; this.props.name &#125;&lt;/h1&gt; <br /></div>
                    &nbsp;&nbsp;&#125;<br />
                  &#125;</span><br />
                </pre>
              </div>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textColor="tertiary">composing components</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <span>class App extends React.Component &#123; <br />
                    &nbsp;&nbsp;render() &#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;return ( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Rahul" /&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Svetha" /&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Welcome name="Shyam" /&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;) <br />
                    &nbsp;&nbsp;&#125; <br />
                    &#125; <br />
                  </span>
                </pre>
              </div>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textColor="tertiary">attributes are turned into props</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <div>&lt;Welcome <span className="red">name</span>="<span className="green">lakshmi</span>" /&gt; <br /></div>
                </pre>
              </div>
            </Fill>
          </Layout>
          <br />
          <Text textSize={30} className="left-align" textColor="tertiary">"props" will become:</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <div>&#123; name: "lakshmi" &#125;</div>
                </pre>
              </div>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textColor="tertiary">attributes are turned into props</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <div>&lt;Welcome <span className="red">name</span>="<span className="green">lakshmi</span>" <span className="red">birthMonth</span>="<span className="green">January</span>" /&gt; <br /></div>
                </pre>
              </div>
            </Fill>
          </Layout>
          <br />
          <Text textSize={30} className="left-align" textColor="tertiary">"props" will become:</Text>
          <Layout>
            <Fill>
              <div>
                <pre class="code">
                  <div>&#123;<br/>
                    &nbsp;&nbsp;name: "lakshmi",<br />
                    &nbsp;&nbsp;birthMonth: "January"<br />
                    &#125;
                  </div>
                </pre>
              </div>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textSize={40} textColor="tertiary">props can't be modified</Text>
          <pre className="code">
            this.props.name = "Daenerys" # Won't work
          </pre>
          <Appear>
            <Text className="left-align" textSize={40} textColor="secondary">..what about dynamic content?</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textSize={70}>
            <span className="blue">states</span>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="tertiary" className="left-align">states are like props,</Heading>
          <Appear>
            <Heading size={3} textColor="secondary" className="left-align">except</Heading>
          </Appear>
          <br />
          <ul className="left-align">
            <Appear>
              <li>they are private</li>
            </Appear>
            <Appear>
              <li>fully controlled by the component</li>
            </Appear>
            <Appear>
              <li>on every update, the component re-renders</li>
            </Appear>
          </ul>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Counter />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane lang="jsx" source={ require("raw-loader!../assets/counter0.example") } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane lang="jsx" source={ require("raw-loader!../assets/counter1.example") } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane lang="jsx" source={ require("raw-loader!../assets/counter2.example") } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <CodePane lang="jsx" source={ require("raw-loader!../assets/actionButton.example") } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Appear>
            <pre className="code">
              <div>this.state.count = 35; # Wrong</div>
            </pre>
          </Appear>
          <Text textSize={40} textColor="tertiary">states cannot be directly modified</Text>
          <Appear>
            <pre className="code">
              <div>
                this.setState(&#123; <br />
                &nbsp;&nbsp;count: 35 <br />
                &#125;) # Correct
              </div>
            </pre>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text className="left-align" textSize={40} textColor="tertiary">state will merge multiple objects</Text>
          <pre className="code">
            <div>
              this.setState(&#123; <br />
              &nbsp;&nbsp;read: 10<br />
              &#125;); <br />
              this.setState(&#123; <br />
              &nbsp;&nbsp;unread: 5 <br />
              &#125;); <br />
            </div>
          </pre>
          <Text className="left-align" textSize={40} textColor="tertiary">state will be</Text>
          <pre className="code">
            &#123; read: 10, unread: 5 &#125;
          </pre>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Text textSize={70}>
            <Link target="_blank" className="blue" href="http://localhost:3000/">a reactive cow</Link>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={3} textColor="tertiary">Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
