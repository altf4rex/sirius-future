import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchLessons } from '../api/fakeApi';
import { CalendarDay, ScheduleState } from '../types';

const initialState: ScheduleState = {
    lessons: [],
    loading: false,
    error: null,
};

export const fetchLessonsAsync = createAsyncThunk('schedule/fetchLessons', async () => {
    const response = await fetchLessons();
    return response as CalendarDay[];
});

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLessonsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLessonsAsync.fulfilled, (state, action: PayloadAction<CalendarDay[]>) => {
                state.loading = false;
                state.lessons = action.payload;
            })
            .addCase(fetchLessonsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch lessons';
            });
    },
});

export default scheduleSlice.reducer;