import { RSAA, getJSON } from "redux-api-middleware";

export const loadTerms = () => ({
    [RSAA]: {
        endpoint: `/api/terms`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'credentials': 'same-origin'
                },
        types: [
            'LOAD_TERMS_REQUEST',
            {
                type: 'LOAD_TERMS_SUCCESS',
                payload: async (action, state, responce) => {
                    try {
                        const res = await getJSON(responce);
                        console.log(res);
                        return { data: res };
                    }
                    catch(err) {
                      console.log(err);
                      return { data: { name: 'System', text: 'Load terms failed' } };
                    }

                },
            },
            'LOAD_TERMS_FAILURE'
        ]

    }
});

