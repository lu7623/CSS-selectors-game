
enum Tags {
    board = 'board',
    plate = 'plate',
    rice = 'rice',
    ramen = 'ramen',
    ginger = 'ginger',
    sause = 'sause',
    wasabi = 'wasabi',
    sushi = 'sushi',
    roll = 'roll'
}

type Attributes = {
    class?: string,
    id?: string,
    data?: string,
    unique?: string
}
export class TreeNode
{    
    constructor (readonly tag:Tags, readonly isTarget: boolean = false, readonly children?: TreeNode[], readonly attributes?: Attributes) {  }
}


export type levels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 ;


interface Task {
    level: levels;
    answer: string;
    description: string;
    node: TreeNode;
}

export const levelParams: Task[] = [
    {
        level: 0,
        answer: 'rice',
        description: 'Select all rice bouls',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.rice, true, undefined, {data: '<rice />', unique: 'rice1'}), new TreeNode(Tags.rice, true, undefined, {data: '<rice />', unique: 'rice2'})], {class: 'small'}),
    },
    {
        level: 1,
        answer: '#spicy',
        description: 'Select spicy ramen',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.ramen, false, undefined, {data: '<ramen />', unique: 'ramen1'}), new TreeNode(Tags.ramen, true, undefined, {id: 'spicy', data: '<ramen id="spicy"/>',  unique: 'ramen2'})], {class: 'small'}),
    },
    {
        level: 2,
        answer: 'plate sushi',
        description: 'Select sushi on the plate',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.plate, false, [new TreeNode(Tags.sushi, true, undefined, {data: '<sushi />',  unique: 'sushi0'})], {class: 'small', data: '<plate></plate>',  unique: 'plate'}), new TreeNode(Tags.sushi, false, undefined, {data: '<sushi />',  unique: 'sushi1'}),  new TreeNode(Tags.sushi, false, undefined, {data: '<sushi />',  unique: 'sushi2'})]),
    },
    {
        level: 3,
        answer:  '.salmon',
        description: 'Select items with class "salmon"',
        node: new TreeNode(Tags.board, false, [ new TreeNode(Tags.plate, false, [new TreeNode(Tags.roll, true, undefined, {class: 'salmon', data: '<roll class="salmon" />',  unique: 'roll1'}), new TreeNode(Tags.roll, true, undefined, {class: 'salmon',  data: '<roll class="salmon" />',  unique: 'roll2'})], { data: '<plate></plate>',  unique: 'plate'}),  new TreeNode(Tags.sushi, false, undefined, { data: '<sushi />',  unique: 'sushi1'}),  new TreeNode(Tags.sushi, true, undefined, {class: 'salmon',  data: '<sushi class="salmon" />',  unique: 'sushi2'})]),
    },
  
    {
        level: 4,
        answer: 'wasabi , ginger',
        description: 'Select wasabi and ginger',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.wasabi, true, undefined, { data: '<wasabi />',  unique: 'wasabi'}),  new TreeNode(Tags.roll, false, undefined, { data: '<roll />',  unique: 'roll1'}), new TreeNode(Tags.roll, false, undefined, { data: '<roll />',  unique: 'roll2'} ), new TreeNode(Tags.ginger, true, undefined,  { data: '<ginger />',  unique: 'ginger'}), new TreeNode(Tags.sushi, false, undefined, {class: 'tuna',  data: '<sushi class="tuna" />',  unique: 'sushi1'}), new TreeNode(Tags.sushi, false, undefined, {class: 'tuna', data: '<sushi class="tuna" />',  unique: 'sushi2'})])
        },
    {
        level: 5,
        answer: '*',
        description: 'Select all items on table',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.ginger, true, undefined, {data: 'ginger />',  unique: 'ginger'}),  new TreeNode(Tags.ramen, true, undefined, {data: '<ramen />',  unique: 'ramen'}), new TreeNode(Tags.sushi, true, undefined, {data: '<sushi />',  unique: 'sushi1'}),  new TreeNode(Tags.sushi, true, undefined, {data: '<sushi />',  unique: 'sushi2'}), new TreeNode(Tags.sause, true, undefined, {data: '<sause />',  unique: 'sause'})])
    },
    {
        level: 6,
        answer:  'rice + sushi',
        description: 'Select all sushi next to rice',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.sushi, false, undefined, {class: 'tuna'}), new TreeNode(Tags.rice, false),  new TreeNode(Tags.sushi, true, undefined, {class: 'unagi'}),  new TreeNode(Tags.rice, false), new TreeNode(Tags.sushi, true, undefined, {class: 'unagi'})])
    },
   
    {
        level: 7,
        answer: 'ramen ~ sushi',
        description: 'Select sushi to the right of ramen',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.sushi, false, undefined, {class: 'octopus'}), new TreeNode(Tags.ramen, false),  new TreeNode(Tags.sushi, true),  new TreeNode(Tags.sushi, true, undefined, {class: 'octopus'}),  new TreeNode(Tags.sushi, true)])
    },
    {
        level: 8,
        answer: 'plate > roll',
        description: 'Select all rolls on the plate',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.wasabi, false), new TreeNode(Tags.plate, false, [new TreeNode(Tags.roll, true), new TreeNode(Tags.roll, true), new TreeNode(Tags.roll, true)]),  new TreeNode(Tags.sushi, false, undefined, {class: 'tuna'}),  new TreeNode(Tags.roll, false)])
    },
    {
        level: 9,
        answer: 'table:first-child',
        description: 'Select the 1st roll on plate',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.plate, false, [new TreeNode(Tags.roll, true, undefined, {class: 'salmon'}), new TreeNode(Tags.roll, false, undefined, {class: 'salmon'}), new TreeNode(Tags.roll, false, undefined, {class: 'salmon'})]),  new TreeNode(Tags.sushi, false), new TreeNode(Tags.roll, false, undefined, {class: 'salmon'})])
    },
    {
        level: 10,
        answer: 'roll:nth-of-type(even)',
        description: 'Select even rolls',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.roll, false), new TreeNode(Tags.roll, true), new TreeNode(Tags.roll, false), new TreeNode(Tags.roll, true),new TreeNode(Tags.roll, false), new TreeNode(Tags.roll, true)])
    },
    {
        level: 11,
        answer: 'plate:empty',
        description: 'Select an empty plate',
        node: new TreeNode(Tags.board, false, [new TreeNode(Tags.plate, false, [new TreeNode(Tags.roll, false, undefined, {class: 'salmon'}), new TreeNode(Tags.roll, false, undefined, {class: 'salmon'})], {class: 'small'}),  new TreeNode(Tags.sause, false), new TreeNode(Tags.plate, true, undefined,  {class: 'small'})])
    },
];