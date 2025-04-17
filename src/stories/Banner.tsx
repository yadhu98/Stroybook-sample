
export interface BannerType  {
    info : 'primary' | 'danger',
    children : string
}
export const Banner = ({info = 'primary',children} : BannerType)  => {
    const styles ={
        backgroundColor : info === 'primary' ? 'blue' : info === 'danger' ? 'red' : 'white'
    }
  return (
    <div style={{backgroundColor : styles.backgroundColor}}>
        {children}
    </div>
  )
}
