import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br /><span>@{this.props.badge.twitter}</span>
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges){
  const [query, setQuery] = React.useState('')
  const [filteredResult, setFilteredResult] = React.useState(badges)

  React.useMemo(
    () => {
      const result = badges.filter(
        badge => {
            return badge.firstName.toLowerCase().includes(query.toLowerCase())
          }
      )
      setFilteredResult(result)
    },
    [badges, query]
  )

  return {query, setQuery, filteredResult}
}

function BadgesList(props) {
  const badges = props.badges
  //hook
  const {query, setQuery, filteredResult} = useSearchBadges(badges);


  if(filteredResult.length === 0){
    return  <div className="BadgesList">
      
              <div className="form-group">
                <label>Filter labels</label>
                <input type="text" className="form-control" 
                  value={query}
                  onChange={ e => {
                    setQuery(e.target.value)
                  }}
                />
              </div>
              <h3>No Badges were found</h3>
            </div>
  }

  return (
    <div className="BadgesList">

      <div className="form-group">
        <label>Filter labels</label>
        <input type="text" className="form-control" 
          value={query}
          onChange={ e => {
            setQuery(e.target.value)
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredResult.map(badge => {
          return (
            <li key={badge.id}>
              <Link className="text-decoration-none text-reset" to={`/badges/${badge.id}`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


export default BadgesList;