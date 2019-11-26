import { useState, useEffect, useRef } from '@tarojs/taro'
import { createUseStore } from 'stook'

export const useStore = createUseStore(useState, useEffect, useRef)

