import { Invoice } from './invoiceType.ts';
const invoices: Invoice[] = [{

            id: 1,
            amount: 125039,
            status: 'pending',
            issueDate: '2026-10-07',
            dueDate: '2026-11-05',
            customer: {
                id: 1,
                name: 'Construtura Meridiano',
                email: 'contato@meridiano.com.br',
            }
        }, {
            id: 2,
            amount: 15340,
            status: 'paid',
            issueDate: '2026-09-03',
            dueDate: '2026-10-05',
            customer: {
                id: 2,
                name: 'Gráfica Nova',
                email: 'nova@grafica.com.br',
            }
        }, {
            id: 3,
            amount: 833457,
            status: 'pending',
            issueDate: '07-10-2026',
            dueDate: '05-11-2026',
            customer: {
                id: 3,
                name: 'Mendes Engenharia',
                email: 'contato@mendesengenharia.com.br',
            }
}];

    return 'Hello React!';{
}
