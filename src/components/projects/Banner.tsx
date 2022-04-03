export default function Banner({ theme, isVideoLeft, video, text }: any) {
	return (
    <div className={ 'banner bg-gradient ' + theme }>
      <div className='mx-0 row'>
        <div className={ isVideoLeft ? '' : 'col-md-6' }></div>
        <div className='col-md-6 col-sm-12'><video autoPlay className='w-100' loop muted playsInline src={ video } /></div>
        <div className={ isVideoLeft ? 'col-md-6' : '' }></div>
      </div>
      <div className='mx-0 position-absolute row w-100' style={{ textShadow: '1px 1px 8px #dc3545', }}>
        <div className={ isVideoLeft ? 'col-md-6' : '' }></div>
        <div className='col-md-6 col-sm-12'><h1 className='banner-text'>{ text }</h1></div>
        <div className={ isVideoLeft ? '' : 'col-md-6' }></div>
      </div>
    </div>
	)
}
