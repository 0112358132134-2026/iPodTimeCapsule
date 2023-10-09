import axios from 'axios';

const apiKey = "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"
//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
const model = "davinci:ft-personal-2023-10-08-22-02-15"
//curie:ft-personal-2023-09-25-15-36-06
const temperature = 0.5
const maxTokens = 120
const topP = 1
const frequencyPenalty = 0
const presencePenalty = 0
const stop = ["end", "END"]

export const fetchPrompt = async ( prompt ) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/' + model + '/completions', {
            prompt: prompt,
            temperature: temperature,
            max_tokens: maxTokens,
            top_p: topP,
            frequency_penalty: frequencyPenalty,
            presence_penalty: presencePenalty,
            stop: stop
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
                
        return {            
            data: response.data.choices[0].text,    
            log: response.data
        }

    } catch (error) {
        console.error('Ha ocurrido un error:', error)
    }
}