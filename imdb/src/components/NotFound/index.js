import { Style } from './style';

const NotFound = () => {
  return (
    <Style>
      <div className='notfound container'>
        <div className='warning-title'>404</div>
        <div className='warning-caption'>Movie not found</div>
      </div>
    </Style>
  );
};
export default NotFound;
