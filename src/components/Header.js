import React from "react";

// instead of a class Header we create a stateless functional component

//pass the props in directly (props) so no need to do this.props.propName, just to props.propName

const Header = props => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of"> of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      {/* tagline is a prop passed down from App.js */}
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
};

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of"> of</span>
//             <span className="the">the</span>
//           </span>
//           Day
//         </h1>
//         {/* tagline is a prop passed down from App.js */}
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
