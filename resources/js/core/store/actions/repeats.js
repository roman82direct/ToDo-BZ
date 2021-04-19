import { RSAA, getJSON } from "redux-api-middleware";

export const loadRepeats = () => ({
    [RSAA]: {
        endpoint: `/api/repeats/`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'credentials': 'same-origin'
                },
        types: [
            'LOAD_REPEATS_REQUEST',
            {
                type: 'LOAD_REPEATS_SUCCESS',
                payload: async (action, state, responce) => {
                    try {
                        const res = await getJSON(responce);
                        console.log(res);
                        return { data: res };
                    }
                    catch(err) {
                      console.log(err);
                      return { data: { name: 'System', text: 'Load repeats failed' } };
                    }

                },
            },
            'LOAD_REPEATS_FAILURE'
        ]

    }
});

