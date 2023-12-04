// courseActionCreators.test.js
import { selectCourse, unselectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

test('selectCourse action creator', () => {
    const action = selectCourse(1);
    expect(action).toEqual({
        type: SELECT_COURSE,
        index: 1,
    });
});

test('unselectCourse action creator', () => {
    const action = unselectCourse(1);
    expect(action).toEqual({
        type: UNSELECT_COURSE,
        index: 1,
    });
});