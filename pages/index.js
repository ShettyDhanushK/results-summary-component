import Image from 'next/image';
import reaction from '../public/icon-reaction.svg';
import memory from '../public/icon-memory.svg';
import verbal from '../public/icon-verbal.svg';
import visual from '../public/icon-visual.svg';

export default function Home() {
  return (
    <>
      <div className='app'>
        <div className='app__card'>
          <div className='app__card-results'>
            <h5>Your Result</h5>
            <div className='app__card-results_circle'>
              <h2>76</h2>
              <p>of 100</p>
            </div>
            <h4>Great</h4>
            <p>You scored higher than 65% of<br /> the people who have taken<br /> these tests.</p>
          </div>
          <div className='app__card-summary'>
            <h3>Summary</h3>
            <div className='app__card-summary-box' style={{backgroundColor: 'hsla(0, 100%, 67%, 0.1)',marginTop: '7%'}}>
              <div className='app__card-summary-box-1'>
                <Image className='app__card-summary-box-1-img' src={reaction} alt="reaction" />
                <h6 style={{color: 'hsla(0, 100%, 67%,1)'}}>Reaction</h6>
              </div>
              <div className='app__card-summary-box-2'>
                <h5>80</h5>
                <h6>/ 100</h6>
              </div>
            </div>
            <div className='app__card-summary-box' style={{backgroundColor: 'hsla(39, 100%, 56%,0.1)'}}>
              <div className='app__card-summary-box-1'>
                <Image className='app__card-summary-box-1-img' src={memory} alt="memory" />
                <h6 style={{color: 'hsl(39, 100%, 56%)',marginRight:'22%'}}>Memory</h6>
              </div>
              <div className='app__card-summary-box-2'>
                <h5>92</h5>
                <h6>/ 100</h6>
              </div>
            </div>
            <div className='app__card-summary-box' style={{backgroundColor: 'hsla(166, 100%, 37%,0.1)'}}>
              <div className='app__card-summary-box-1'>
                <Image className='app__card-summary-box-1-img' src={verbal} alt="verbal" />
                <h6 style={{color: 'hsl(166, 100%, 37%)',marginRight:'30%'}}>Verbal</h6>
              </div>
              <div className='app__card-summary-box-2'>
                <h5>61</h5>
                <h6>/ 100</h6>
              </div>
            </div>
            <div className='app__card-summary-box' style={{backgroundColor:'hsla(234, 85%, 45%,0.1)'}}>
              <div className='app__card-summary-box-1'>
                <Image className='app__card-summary-box-1-img' src={visual} alt="visual" />
                <h6 style={{color: 'hsl(234, 85%, 45%)', marginRight:'30%'}}>Visual</h6>
              </div>
              <div className='app__card-summary-box-2'>
                <h5>72</h5>
                <h6>/ 100</h6>
              </div>
            </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  )
}
