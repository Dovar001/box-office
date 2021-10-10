import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid'
import ActorGrid from '../components/actor/ActorGrid'
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, RadioWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {

    const [input,setInput] = useLastQuery();
    const [results,setResults] = useState(null);

    const [searchOption,setSearchOption] = useState('shows');

    const isShowSearch = searchOption === 'shows';

    const onInputChange = (ev) => {
      setInput(ev.target.value)
    }

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result=>setResults(result))
      
  }

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13){
        onSearch()
    }
  }

  const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)     
  }

 

  // eslint-disable-next-line consistent-return
  const renderResults = () => {
      if(results && results.length === 0){
          
        return <div>No Results</div>
      }
      if(results && results.length >0){
         return results[0].show ?
            < ShowGrid data={results} />
             :
             <ActorGrid data={results} />
    }
      return null
  }

    return (
        <div>
       
           <MainPageLayout>
               <SearchInput
               type="text"
               value={input}
               onKeyDown={onKeyDown}
               onChange={onInputChange} 
               />

                <RadioInputsWrapper>
                  <div>
                    <RadioWrapper htmlFor="shows-search">
                        Shows
                        <input 
                        id="shows-search" 
                        type="radio" 
                        value="shows" 
                        onChange={onRadioChange}
                        checked={isShowSearch}
                         />
                         <span />
                    </RadioWrapper>
                    </div>
              <div>
                    <RadioWrapper htmlFor="actors-search">
                        Actors
                        <input 
                        id="actors-search" 
                        type="radio" 
                        value="people" 
                        onChange={onRadioChange}
                        checked={!isShowSearch}
                         />
                         <span />
                    </RadioWrapper>
                    </div>
                </RadioInputsWrapper>
              
             <SearchButtonWrapper>
               <button 
               type="button" 
               onClick={onSearch}
               >Search
               </button> 
               </SearchButtonWrapper>
               </MainPageLayout>
              

               {renderResults()}
        </div>
    )
}

export default Home
