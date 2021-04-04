import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

  /*custom hook */
  function useMaxIncrease(max){
    const [count, setCount] = React.useState(0)

    if(count > max){
      setCount(0)
    }

    return [count, setCount]
  }

function BadgeDetails(props) {
  /*
  //usando hook de react useState(inicializar variable)
  const [count, setCount] = React.useState(0)// devuelve [variable, funcionParaManejarVariable]
  */

  /*usando custom hook */
  const [count, setCount] = useMaxIncrease(4)

  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la Conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
            badgeValues={badge}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>

            <button onClick={ () => {
              setCount(count + 1)
            } } className="btn btn-primary mb-2">
              increase count {count}
            </button>

              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
