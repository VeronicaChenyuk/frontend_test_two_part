import React from 'react';
import { Table, Button } from 'reactstrap';
import './main.css'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      people: []
    }
    this.removeTodo = this.deleteRow.bind(this)
  }
  async componentDidMount() {
    const url = 'https://frontend-test.netbox.ru/';
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
    this.setState({
      loading: false,
      people: data,
    })
  }
  deleteRow(person, i) {
    let persons = this.state.people.slice();
    persons.splice(i, 1);
    this.setState({
      persons
    })
  }
  render() {

    return (
      <>
        <Table responsive>
          <thead>
            <tr>
              <th className='box-1'>#</th>
              <th className='box-2'>Name</th>
              <th className='age'>Age</th>
              <th className='phone'>Phone</th>
              <th className='e-mail'>E-mail</th>
            </tr>
          </thead>
          <>
            {this.state.loading || !this.state.people ? (<td> loading..</td>
            ) : (
                <tbody className='main' >
                  {
                    this.state.people.map((person, i) =>
                      <tr className='container' key={`any-${i}`}>{
                        person.map((ever, i) => {
                          return <td key={`some-${i}`}>{ever.value}</td>

                        })
                      }

                        <td><Button key={`so-${i}`} outline color="success" size="sm">Редактировать</Button>
                          <Button key={`s-${i}`} onClick={() => { this.deleteRow(person, i)}} outline color="danger" size="sm">Удалить</Button>
                        </td>
                      </tr>


                    )
                  }
                </tbody>
              )}

          </>
        </Table>
      </>
    )

  }

}
export default Main

