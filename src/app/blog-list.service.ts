import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BlogListService {
  private _inMemoryBlogList: BlogInfo[] = [
    {
      title: '搭建自己的免费小博客',
      tags: ['技术','Angular'],
      description: '基于Netify + CloudFlare + 私有域名的免费博客搭建',
      url: '1'
    }, {
      title: 'Angular 构建组件库',
      tags: ['技术', 'Angular'],
      description: '构建自己的组件库并在项目中使用',
      url: '2'
    }
  ]
  public getBlogInfoList(): BlogInfo[] {
    return this._inMemoryBlogList;
  }
}
export class BlogInfo{
  constructor(
    public title: string,
    public tags: string[],
    public description: string,
    public url: string
  ) {}
}
