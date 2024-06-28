import NavigationBar from '../CommonComponents/NavigationBar';
import Topic from './TopicComponent'

function BooksOverviewPage() {

  return (
    <section className='flex flex-col h-screen'>
      <NavigationBar />

      <div className="flex justify-evenly items-center w-screen py-5">
        {/* COLUMN 1 */}
          <div className="flex flex-col justify-center items-center">
            <Topic TopicName='Topic 1'/>
            <Topic TopicName='Topic 2'/>
            <Topic TopicName='Topic 3'/>
            <Topic TopicName='Topic 4'/>
          </div>
        {/* COLUMN 2 */}
          <div className="flex flex-col justify-center items-center">
            <Topic TopicName='Topic 5'/>
            <Topic TopicName='Topic 6'/>
            <Topic TopicName='Topic 7'/>
            <Topic TopicName='Topic 8'/>
          </div>
      </div>

    </section>
  )
}

export default BooksOverviewPage;