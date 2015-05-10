var FilterBar = React.createClass({
  render: function() {
    return (
      <div>
      Filter Bar
      </div>
    );
  }
});

var PolyhedronRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.polyhedron.name}</td>
        <td>{this.props.polyhedron.type}</td>
        <td>{this.props.polyhedron.vertices}</td>
        <td>{this.props.polyhedron.edges}</td>
        <td>{this.props.polyhedron.faces /* TODO fix with sum */}</td>
      </tr>
    );
  }
});

var PolyhedronTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.polyhedra.forEach(function(polyhedron) {
      rows.push(<PolyhedronRow polyhedron={polyhedron} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Vertices</th>
            <th>Edges</th>
            <th>Faces</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var FilterablePolyhedronTable = React.createClass({
  render: function() {
    return (
      <div>
        <FilterBar />
        <PolyhedronTable polyhedra={this.props.polyhedra}/>
      </div>
    );
  }
});

/* TODO move this to a JSON file */
var POLYHEDRA = [
  {
    name: 'tetrahedron',
    type: 'platonic',
    vertices: 4,
    edges: 6,
    faces: {
      3: 4
    },
    symmetry: 'T',
    chiral: false
  },
  {
    name: 'cube',
    type: 'platonic',
    vertices: 8,
    edges: 12,
    faces: {
      4: 6
    },
    symmetry: 'O',
    chiral: false
  },
  {
    name: 'octahedron',
    type: 'platonic',
    vertices: 6,
    edges: 12,
    faces: {
      3: 8
    },
    symmetry: 'O',
    chiral: false
  },
  {
    name: 'dodecahedron',
    type: 'platonic',
    vertices: 20,
    edges: 30,
    faces: {
      5: 12
    },
    symmetry: 'I',
    chiral: false
  },
  {
    name: 'icosahedron',
    type: 'platonic',
    vertices: 12,
    edges: 30,
    faces: {
      3: 20
    },
    symmetry: 'I',
    chiral: false
  }
];

React.render(<FilterablePolyhedronTable polyhedra={POLYHEDRA}/>, document.getElementById('example'));
