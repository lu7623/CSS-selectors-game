import { TreeNode } from './tree';

type levels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Task {
    level: levels;
    answer: string;
    description: string;
    //  html: string[],
    //    templateID: string,
    node: TreeNode;
}

export const levelParams: Task[] = [
    {
        level: 1,
        answer: 'rice',
        description: 'Select all rice bouls',
        node: new TreeNode('table', false, [new TreeNode('rice', true), new TreeNode('rice', true)]),
    },
];

//{level: 1, answer: 'rice', description: 'Select all rice bouls', html: ['&lt;table&gt;',' &nbsp;&lt;rice /&gt;',  '&nbsp;&lt;rice /&gt;', '&lt;/table&gt;'], templateID: 'level1', node},
// {level: 2, answer: '#spicy', task: 'Select spicy ramen', html: ['&lt;table&gt;',' &nbsp;&lt;ramen /&gt;',  '&nbsp;&lt;ramen id="spicy" /&gt;', '&lt;/table&gt;'], templateID: 'level2'},

// {level: 3, answer: 'plate sushi', task: 'Select sushi on the plate', html: ['&lt;table&gt;', '&nbsp;&lt;plate&gt;', '&nbsp;&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;/plate&gt;', '&nbsp;&lt;sushi /&gt;', '&lt;/table&gt;'], templateID: 'level3'},

// {level: 4, answer: '.salmon', task: 'Select all the items with salmon class', html: ['&lt;table&gt;', '&nbsp;&lt;plate&gt;', '&nbsp;&nbsp;&lt;roll /&gt;', '&nbsp;&nbsp;&lt;roll class="salmon"/&gt;', '&nbsp;&lt;/plate&gt;', '&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;sushi class="salmon" /&gt;', '&lt;/table&gt;'], templateID: 'level4'},

// {level: 5, answer: 'wasabi, ginger' ||  'ginger, wasabi' , task: 'Select wasabi and ginger', html: ['&lt;table&gt;', '&nbsp;&lt;wasabi /&gt;', '&nbsp;&lt;roll /&gt;', '&nbsp;&lt;roll /&gt;', '&nbsp;&lt;ginger /&gt;', '&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;sushi /&gt;', '&lt;/table&gt;'], templateID: 'level5'},

// {level: 6, answer: '*', task: 'Select all items on table', html: ['&lt;table&gt;', '&nbsp;&lt;ginger /&gt;', '&nbsp;&lt;ramen /&gt;', '&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;sause /&gt;', '&lt;/table&gt;'], templateID: 'level6'},

// {level: 7, answer: 'rice + sushi', task: 'Select all sushi next to rice', html: ['&lt;table&gt;', '&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;rice /&gt;', '&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;rice /&gt;', '&nbsp;&lt;sushi /&gt;', '&lt;/table&gt;'], templateID: 'level7'},

// {level: 8, answer: 'ramen ~ sushi', task: 'Select all sushi to the right of ramen', html: ['&lt;table&gt;', '&nbsp;&lt;sushi class="octopus"/&gt;', '&nbsp;&lt;ramen /&gt;', '&nbsp;&lt;sushi class="octopus" /&gt;', '&nbsp;&lt;sushi /&gt;', '&nbsp;&lt;sause /&gt;', '&lt;/table&gt;'], templateID: 'level8'},

// {level: 9, answer: 'plate > roll', task: 'Select all rolls on the plate', html: ['&lt;table&gt;', '&nbsp;&lt;wasabi /&gt;', '&nbsp;&lt;plate&gt;', '&nbsp;&nbsp;&lt;roll /&gt;', '&nbsp;&nbsp;&lt;roll /&gt;', '&nbsp;&nbsp;&lt;roll /&gt;',  '&nbsp;&lt;/plate&gt;',  '&nbsp;&lt;sushi /&gt;',  '&nbsp;&lt;roll /&gt;', '&lt;/table&gt;'], templateID: 'level9'},

// {level: 10, answer: 'table:first-child', task: 'Select the 1st roll on plate', html: ['&lt;table&gt;',' &nbsp;&lt;plate&gt;', '&nbsp; &nbsp;&lt;roll class="salmon" /&gt;', '&nbsp; &nbsp;&lt;roll class="salmon" /&gt;', '&nbsp; &nbsp;&lt;roll class="salmon" /&gt;', '&nbsp;&lt;/plate &gt;', '&nbsp;&lt;sushi/&gt;', '&nbsp;&lt;roll class="salmon" /&gt;', '&lt;/table&gt;'], templateID: 'level10'},

// {level: 11, answer: 'roll:nth-of-type(even)', task: 'Select even rolls', html: ['&lt;table&gt;', '&nbsp;&lt;roll /&gt;', '&nbsp;&lt;roll /&gt;', '&nbsp;&lt;roll /&gt;', '&nbsp;&lt;roll /&gt;', '&nbsp;&lt;roll /&gt;', '&nbsp;&lt;roll /&gt;', '&lt;/table&gt;'], templateID: 'level11'},

// {level: 12, answer: 'plate:empty', task: 'Select an empty plate', html: ['&lt;table&gt;',' &nbsp;&lt;plate&gt;', '&nbsp; &nbsp;&lt;roll class="salmon" /&gt;', '&nbsp; &nbsp;&lt;roll class="salmon" /&gt;', '&nbsp;&lt;/plate &gt;', '&nbsp;&lt;sause/&gt;', ' &nbsp;&lt;plate&gt;', ' &nbsp;&lt;/plate&gt;', '&lt;/table&gt;'], templateID: 'level12'}
// ]
